// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxt/content',
    '@vue-macros/nuxt',
    "@nuxt/image",
    '@unocss/nuxt',
    '@nuxtjs/google-fonts',
  ],
  macros: {
    betterDefine: false,
  },
  css: [
    '@unocss/reset/tailwind-compat.css'
  ],
  googleFonts: {
    families: {
      Inter: ['100..800'],
    },
    download: true,
  },
})
