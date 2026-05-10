import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta línea es la más importante para que GitHub Pages 
  // encuentre tus archivos en la subcarpeta del repositorio.
  base: '/atomiclabs3d/',
})