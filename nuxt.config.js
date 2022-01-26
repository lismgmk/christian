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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            iso: "en-us",
            name: "english"
          },
          {
            code: "ru",
            iso: "ru-Ru",
            name: "中文"
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected"
        },
        vueI18nLoader: true,
        defaultLocale: "en",

        vueI18n: {
          // fallbackLocale: 'en'
        }
      }
    ]


  ],
  //   i18n: {
  //     locales: ['en', 'fr', 'es'],
  //     defaultLocale: 'en',
  //     vueI18n: {
  //       fallbackLocale: 'en',
  //       messages: {
  //         en: {
  //           welcome: 'Welcome'
  //         },
  //         fr: {
  //           welcome: 'Bienvenue'
  //         },
  //         es: {
  //           welcome: 'Bienvenido'
  //         }
  //       }
  //     }
  //   },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
