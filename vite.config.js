import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
  server: {
    host: 'localhost', // only reachable from this machine, not on the network/LAN IP
    port: 3000,
  },
  preview: {
    host: 'localhost',
    port: 3000,
  },
});
