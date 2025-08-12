// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://entegigante.github.io', // Tu URL de GitHub Pages
  base: '/astroex', // El nombre de tu repositorio
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '~': resolve(__dirname, './src')
      }
    }
  }
});