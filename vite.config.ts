import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { writeFileSync } from 'fs'

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sasha-af.one/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

  writeFileSync('public/sitemap.xml', sitemap)
}

const sitemapPlugin = () => {
  return {
    name: 'generate-sitemap',
    buildStart() {
      generateSitemap()
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    sitemapPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})