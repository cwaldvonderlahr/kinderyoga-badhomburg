import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  css: ['/assets/tailwind.css', '/assets/fonts.css'],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
    },
})
