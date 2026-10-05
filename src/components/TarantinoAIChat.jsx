import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../data/LanguageContext.jsx'
import { translations } from '../data/translation.js'

function createSessionId() {
  const storedSessionId = localStorage.getItem('tarantino-ai-session-id')
  if (storedSessionId) return storedSessionId

  const sessionId = crypto.randomUUID
    ? crypto.randomUUID()
    : `tarantino-${Date.now()}-${Math.random().toString(36).slice(2)}`
  localStorage.setItem('tarantino-ai-session-id', sessionId)
  return sessionId
}

function TypingIndicator({ label }) {
  return (
    <div className="flex items-center gap-2 text-xs text-cream/45" aria-label={label}>
      <span className="flex gap-1" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.14 }}
            className="h-1.5 w-1.5 rounded-full bg-caramel"
          />
        ))}
      </span>
      {label}
    </div>
  )
}

function TarantinoAIChat() {
  const { language } = useLanguage()
  const copy = translations[language].aiChat
  const webhookUrl = import.meta.env.VITE_TARANTINO_AI_WEBHOOK_URL
  const sessionId = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [messages, setMessages] = useState(() => [
    { id: 'welcome', role: 'assistant', text: copy.greeting },
  ])

  const openChat = () => {
    if (!sessionId.current) sessionId.current = createSessionId()
    setIsOpen(true)
  }

  const sendMessage = async () => {
    const message = draft.trim()
    if (!message || loading) return

    if (!webhookUrl) {
      setError(copy.unavailable)
      return
    }

    if (!sessionId.current) sessionId.current = createSessionId()

    setDraft('')
    setError('')
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-user`, role: 'user', text: message },
    ])
    setLoading(true)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          language,
          sessionId: sessionId.current,
        }),
      })

      if (!response.ok) throw new Error(`AI webhook returned ${response.status}`)

      const data = await response.json()
      const output = typeof data.output === 'string' ? data.output.trim() : ''
      if (!output) throw new Error('AI webhook returned no output')

      setMessages((current) => [
        ...current,
        { id: `${Date.now()}-assistant`, role: 'assistant', text: output },
      ])
    } catch (requestError) {
      console.error('Tarantino AI request failed:', requestError)
      setError(copy.error)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 right-0 flex h-[min(680px,100dvh)] w-full flex-col overflow-hidden rounded-t-2xl border border-cream/15 bg-espresso text-cream shadow-2xl sm:bottom-16 sm:right-6 sm:h-[min(680px,calc(100vh-8rem))] sm:w-[min(410px,calc(100vw-3rem))] sm:rounded-2xl"
            aria-label={copy.title}
          >
            <header className="flex items-start justify-between border-b border-cream/10 bg-dark-coffee/80 px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-caramel/50 text-sm text-caramel" aria-hidden="true">✦</span>
                <div>
                  <p className="font-display text-xl leading-none">{copy.title}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/40">{copy.subtitle}</p>
                </div>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 text-xl leading-none text-cream/55 transition-colors hover:bg-cream/10 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel" aria-label={copy.close}>×</button>
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'rounded-br-sm bg-caramel text-espresso' : 'rounded-bl-sm border border-cream/10 bg-roasted-coffee/70 text-cream/85'}`}>
                    {message.text}
                  </p>
                </div>
              ))}
              {loading && <TypingIndicator label={copy.typing} />}
              {error && <p role="alert" className="text-xs leading-5 text-amber">{error}</p>}
            </div>

            <div className="border-t border-cream/10 bg-dark-coffee/60 p-4">
              <div className="flex items-end gap-2 rounded-xl border border-cream/15 bg-espresso px-3 py-2 focus-within:border-caramel">
                <label htmlFor="tarantino-ai-message" className="sr-only">{copy.inputLabel}</label>
                <textarea id="tarantino-ai-message" rows="1" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={handleKeyDown} placeholder={copy.placeholder} disabled={loading} className="max-h-28 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm leading-6 text-cream outline-none placeholder:text-cream/30 disabled:cursor-wait" />
                <button type="button" onClick={sendMessage} disabled={loading || !draft.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-caramel text-lg text-espresso transition-colors hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel disabled:cursor-not-allowed disabled:opacity-40" aria-label={loading ? copy.typing : copy.send}>{loading ? '…' : '↑'}</button>
              </div>
              <p className="mt-2 text-center text-[9px] uppercase tracking-[0.14em] text-cream/25">{copy.hint}</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button type="button" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }} onClick={openChat} className="flex items-center gap-3 rounded-full border border-caramel/60 bg-espresso px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-cream shadow-xl transition-colors hover:border-caramel hover:bg-dark-coffee focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel" aria-label={copy.open}>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-caramel text-sm text-espresso" aria-hidden="true">✦</span>
          <span>{copy.open}</span>
        </motion.button>
      )}
    </div>
  )
}

export default TarantinoAIChat
