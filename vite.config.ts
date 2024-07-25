import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin(), devtools()],
  server: {
    port: 3000,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
