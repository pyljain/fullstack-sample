import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './ui'),
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, './ui/index.html'),
    },
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})
