import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/contact': {
          target: env.VITE_CONTACT_PROXY_TARGET || 'https://us-central1-ono-ar.cloudfunctions.net',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace('/api/contact', '/contactForm'),
        },
      },
    },
  }
})
