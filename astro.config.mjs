import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://rizkal.wtf',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
})
