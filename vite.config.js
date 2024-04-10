import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { ESLint } from 'eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ESLint()],
  base: "/portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
