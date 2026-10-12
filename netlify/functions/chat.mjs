// Tarantino AI — Netlify port of the n8n workflows in n8n/:
//   "Tarantino AI Agent"  -> Groq chat model with two tools
//   "Menu Search"         -> menu_search (Supabase menu_items, ilike on name or category)
//   "knowledge search"    -> knowledge_search (Gemini embeddings + Supabase match_documents)
//
// Request:  POST { message, language?, sessionId? }
// Response: { output }

import { SYSTEM_PROMPT } from '../lib/prompt.mjs'

const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-120b'
// Must match the model used by "Tarantino Knowledge ingestion" (n8n default).
const EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001'
const MAX_MESSAGE_LENGTH = 1000
const MAX_TOOL_ROUNDS = 5

const tools = [
  {
    type: 'function',
    function: {
      name: 'menu_search',
      description:
        "Search the Tarantino Ciné Café menu for food and drink items and return matching items with their category and price. Use this tool whenever the customer asks about menu items, prices, or what is available. The query must use the customer's menu item or keyword, preserving the relevant spelling.",
      parameters: {
        type: 'object',
        properties: { query: { type: 'string', description: 'Menu item or keyword' } },
        required: ['query'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'knowledge_search',
      description:
        'Search Tarantino Ciné Café information: opening hours, location, address, phone, delivery, events, karaoke, services, facilities and general questions about the café.',
      parameters: {
        type: 'object',
        properties: { query: { type: 'string', description: 'The question to look up' } },
        required: ['query'],
      },
    },
  },
]

function env(name, ...fallbacks) {
  for (const key of [name, ...fallbacks]) {
    if (process.env[key]) return process.env[key]
  }
  return ''
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function supabaseHeaders() {
  const key = env('SUPABASE_SERVICE_ROLE_KEY')
  return { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }
}

async function menuSearch(query) {
  // Quote the value so commas/parentheses can't break the PostgREST filter.
  const term = String(query).replace(/["\\*]/g, '').trim()
  if (!term) return []
  const value = `"*${term}*"`
  const filter = encodeURIComponent(`(item_name.ilike.${value},category.ilike.${value})`)
  const url = `${env('SUPABASE_URL', 'VITE_SUPABASE_URL')}/rest/v1/menu_items?select=*&or=${filter}&limit=50`

  const response = await fetch(url, { headers: supabaseHeaders() })
  if (!response.ok) throw new Error(`menu_items query failed: ${response.status}`)
  return response.json()
}

async function knowledgeSearch(query) {
  const embedResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env('GEMINI_API_KEY') },
      body: JSON.stringify({ content: { parts: [{ text: String(query) }] } }),
    },
  )
  if (!embedResponse.ok) throw new Error(`Gemini embedding failed: ${embedResponse.status}`)
  const { embedding } = await embedResponse.json()

  const matchResponse = await fetch(
    `${env('SUPABASE_URL', 'VITE_SUPABASE_URL')}/rest/v1/rpc/match_documents`,
    {
      method: 'POST',
      headers: supabaseHeaders(),
      body: JSON.stringify({ query_embedding: embedding.values, match_count: 4, filter: {} }),
    },
  )
  if (!matchResponse.ok) throw new Error(`match_documents failed: ${matchResponse.status}`)
  const rows = await matchResponse.json()
  return rows.map((row) => row.content)
}

async function runTool(name, rawArguments) {
  let args = {}
  try {
    args = JSON.parse(rawArguments || '{}')
  } catch {
    return { error: 'Invalid tool arguments' }
  }

  try {
    if (name === 'menu_search') return { items: await menuSearch(args.query ?? '') }
    if (name === 'knowledge_search') return { results: await knowledgeSearch(args.query ?? '') }
    return { error: `Unknown tool ${name}` }
  } catch (error) {
    console.error(`Tool ${name} failed:`, error)
    return { error: 'Lookup failed, no information available.' }
  }
}

async function callGroq(messages) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env('GROQ_API_KEY')}`,
    },
    body: JSON.stringify({ model: GROQ_MODEL, messages, tools, tool_choice: 'auto' }),
  })
  if (!response.ok) {
    throw new Error(`Groq request failed: ${response.status} ${await response.text()}`)
  }
  const data = await response.json()
  return data.choices[0].message
}

export default async (request) => {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const missing = ['GROQ_API_KEY', 'GEMINI_API_KEY', 'SUPABASE_SERVICE_ROLE_KEY'].filter((key) => !env(key))
  if (!env('SUPABASE_URL', 'VITE_SUPABASE_URL')) missing.push('SUPABASE_URL')
  if (missing.length) {
    console.error('Missing environment variables:', missing.join(', '))
    return json({ error: 'Assistant is not configured' }, 503)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const message = typeof body?.message === 'string' ? body.message.trim() : ''
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return json({ error: 'Message is required (max 1000 characters)' }, 400)
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'user', content: message },
  ]

  try {
    for (let round = 0; round <= MAX_TOOL_ROUNDS; round++) {
      const reply = await callGroq(messages)

      if (!reply.tool_calls?.length) {
        const output = (reply.content || '').trim()
        if (!output) throw new Error('Empty model reply')
        return json({ output })
      }

      messages.push({ role: 'assistant', content: reply.content ?? '', tool_calls: reply.tool_calls })
      const results = await Promise.all(
        reply.tool_calls.map((call) => runTool(call.function.name, call.function.arguments)),
      )
      reply.tool_calls.forEach((call, index) => {
        messages.push({ role: 'tool', tool_call_id: call.id, content: JSON.stringify(results[index]) })
      })
    }
    throw new Error('Too many tool rounds')
  } catch (error) {
    console.error('Tarantino AI failed:', error)
    return json({ error: 'Assistant unavailable' }, 502)
  }
}
