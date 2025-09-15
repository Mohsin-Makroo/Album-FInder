import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// You can remove the tailwindcss import, the init command will add it back correctly.

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})