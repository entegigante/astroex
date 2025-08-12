// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { resolve } from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlosesparza.github.io', // Reemplaza con tu URL de GitHub Pages
  base: '/astroex', // Reemplaza con el nombre de tu repositorio
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    }
  }
});