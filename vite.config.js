import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Allow ngrok tunnels for previewing on a phone.
const allowedHosts = ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.dev']

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: { allowedHosts },
  preview: {
    allowedHosts,
    // Forward the AI chat to the local n8n so it works through the tunnel.
    proxy: { '/webhook': 'http://localhost:5678' },
  },
})
