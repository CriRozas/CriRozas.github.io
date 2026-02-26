import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL de tu sitio
  site: 'https://CriRozas.github.io',
  
  // Base para GitHub Pages (nombre exacto del repo)
  base: '/',
  output: 'static',
  
  // Tailwind estático y otras integraciones pueden ir aquí si lo deseas
  integrations: [],
});