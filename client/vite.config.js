import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // 1. Add this import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 2. Add this here
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})