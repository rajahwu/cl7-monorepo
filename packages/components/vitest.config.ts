import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@clearline7/theme': path.resolve(__dirname, '../theme/src'),
      '@clearline7/set-definitions': path.resolve(__dirname, '../set-definitions/src'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/index.ts'],
      thresholds: {
        lines: 75,
        functions: 75,
        statements: 75,
      },
    },
  },
})
