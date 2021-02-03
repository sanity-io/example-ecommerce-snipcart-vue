export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  // https://nuxtjs.org/api/configuration-modern/
  modern: process.env.NODE_ENV === 'production',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ecommerce-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sanity frontend example for E-commerce in Vue.js',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Load categories and vendors
   */
  plugins: ['~/plugins/sanity-image-builder'],
  /** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/sanity', '@nuxtjs/snipcart'],
  /*
   ** Global CSS
   */
  css: ['~/css/global.css'],
  /*

   ** Build configuration
   */
  build: {},

  // https://sanity.nuxtjs.org
  sanity: {
    projectId: 'ru2xdibx',
    minimal: true,
    useCdn: false,
    dataset: 'production',
  },

  snipcart: {
    key:
      'ODRkNmJhZDktOTk5YS00Y2Y1LTk5Y2ItMTkzNTlkZTYxNzhmNjM2NTk1NTI2OTgyMTc1MTUy',
  },
  generate: {
    fallback: true,
    crawler: true,
  },
}
