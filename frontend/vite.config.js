import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: './renderer',
  base: './',
  plugins: [vue()],
  build: {
    outDir: '../dist/renderer',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './renderer'),
    },
  },
})
