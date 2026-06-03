<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
});
=======
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // 1. Add this import


// https://vite.dev/config/
export default defineConfig({
  server: {
  proxy: {
    '/api': {
      target:"http://localhost:5000",
      secure:false,
    }
  }
},

  plugins: [
    tailwindcss(), // 2. Add this here
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
>>>>>>> 9fd1453f029e3449823ac9ad09b238362e52676e
