import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  server: {
    port: 3000,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
