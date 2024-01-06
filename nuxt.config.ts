// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxt/content',
    '@vue-macros/nuxt',
  ],
  macros: {
    betterDefine: false,
  },
})
