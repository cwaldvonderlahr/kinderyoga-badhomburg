import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['/assets/tailwind.css', '/assets/fonts.css'],
  build: {
    postcss: {
      // add Postcss options
      postcssOptions: require('./postcss.config.js'),
    },
    },
})
