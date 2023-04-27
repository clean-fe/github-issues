import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: ['**/node_modules/**'],
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.js'],
    globals: true,
  },
});
