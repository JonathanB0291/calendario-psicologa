import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/calendario-psicologa/", // Cambia esto según el nombre de tu repo
});
