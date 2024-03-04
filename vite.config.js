// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // set base to current directory
  server: {
    port: 8080, // set the server port to 8080
    open: true, // open the browser on server start
  },
  build: {
    outDir: 'dist', // set the output directory for the build
    assetsDir: 'assets', // set the directory for assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bio: resolve(__dirname, 'html/bio.html'),
        works: resolve(__dirname, 'html/works.html'),
        events: resolve(__dirname, 'html/events.html')
      }
    }
  },
})