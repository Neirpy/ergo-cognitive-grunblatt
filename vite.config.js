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
        catching_fire: resolve(__dirname, 'html/catching_fire.html'),
        gregor_and_the_marks_of_secret: resolve(__dirname, 'html/gregor_and_the_marks_of_secret.html'),
        gregor_and_the_prophecy_of_bane: resolve(__dirname, 'html/gregor_and_the_prophecy_of_bane.html'),
        gregor_and_the_curse_of_the_warmbloods: resolve(__dirname, 'html/gregor_and_the_curse_of_the_warmbloods.html'),
        gregor_and_the_code_of_claw: resolve(__dirname, 'html/gregor_and_the_code_of_claw.html'),
        the_hunger_games: resolve(__dirname, 'html/the_hunger_games.html'),
        when_charlie_charlie_mcbutton: resolve(__dirname, 'html/when_charlie_mcbutton.html'),
        year_of_the_jungle: resolve(__dirname, 'html/year_of_the_jungle.html'),
      }
    }
  },
})