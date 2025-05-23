import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // installs react vite to project 
import tailwindcss from '@tailwindcss/vite' // installs tailwind css to project
import path from 'path' // creates a reference to path (./src)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // resolves path folder shortcut
    },
  },
})
