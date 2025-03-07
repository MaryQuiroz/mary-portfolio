import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mary-portfolio/',
  // Eliminando la base URL para despliegues en Vercel
  // base: '/mary-portfolio/',
})
