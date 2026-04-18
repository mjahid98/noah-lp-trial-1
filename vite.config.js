import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@ui': resolve(__dirname, 'src/components/ui'),
      '@sections': resolve(__dirname, 'src/components/sections'),
      '@layout': resolve(__dirname, 'src/components/layout'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@content': resolve(__dirname, 'src/content'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
})
