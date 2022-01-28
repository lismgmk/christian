export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'christian',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/header.css',
    '@/assets/css/content.css',
    '@/assets/css/titleNote.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: ["~/plugins/i18n.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Montserrat: [700],
      Lato: [400, 700],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    "@nuxtjs/i18n"
  ],
    i18n: {
      locales: [
        { code: "en", iso: "en-US", file: "content-en.json" },
        { code: "ru", iso: "ru-RU", file: "content-ru.json" },
        { code: "es", iso: "es-ES", file: "content-es.json" }
      ],
      langDir: "~/locales/",
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected"
      },
      vueI18nLoader: true,
      defaultLocale: "en",
    },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
