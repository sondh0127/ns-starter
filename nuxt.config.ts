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
    '@nuxtjs/i18n',
    'radix-vue/nuxt',
    '@nuxthq/studio',
    'nuxt-icon',
    '@nuxtjs/color-mode',
  ],
  macros: {
    betterDefine: false,
  },
  css: [
    '@unocss/reset/tailwind.css'
  ],
  googleFonts: {
    families: {
      Inter: '100..800'
    },
    download: true,
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'vi',
        file: 'vi.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
  },
  colorMode: {
    classSuffix: '',
  },

  $development: {
    css: [
      'vue-json-pretty/lib/styles.css',
    ]
  },
})
