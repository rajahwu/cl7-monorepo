import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Direct Vite to the source code for instant updates
      '@clearline7/set-definitions': path.resolve(__dirname, '../../packages/set-definitions/src'),
      '@clearline7/theme': path.resolve(__dirname, '../../packages/theme/src'),
      '@clearline7/components': path.resolve(__dirname, '../../packages/components/src'),
      '@clearline7/types': path.resolve(__dirname, '../../packages/types/src'),
    },
  },
  server: {
    fs: {
      allow: ['../..'], // Allows Vite to climb out of the app folder into the packages folder
    },
  },
})
