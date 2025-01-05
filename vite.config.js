import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Polyfill for process.env
  },
  server: {
    // Configure server options if needed (for local dev)
  },
  build: {
    // Configure build options
  },
});
