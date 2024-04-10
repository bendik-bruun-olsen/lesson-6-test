import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import eslint from 'eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: "/lesson-6-test",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
