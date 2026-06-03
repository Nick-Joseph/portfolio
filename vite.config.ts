import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // During `npm run dev`, forward /api requests to the local Express
    // backend on port 5000. In production on Vercel, /api is served by
    // the serverless function instead, so the frontend code stays the same.
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
