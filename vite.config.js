import { defineConfig, loadEnv } from 'vite'
import process from 'process'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all environment variables
  const env = loadEnv(mode, process.cwd(), '')
  const isVercel = env.VERCEL === '1'

  return {
    plugins: [react(), tailwindcss()],
    base: isVercel ? '/' : '/Expense-Handler-App/',
}
})
