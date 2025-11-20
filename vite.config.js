import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 export default defineConfig({
  server: {
    sourcemap: false,
  },
  build: {
    sourcemap: false,
  },
  plugins: [react()],
  base:"/netflix_clone_frontend_/"

});


