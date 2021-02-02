export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
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
  plugins: [],
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
    projectId: '5zj51uy1',
    minimal: true,
    useCdn: false,
    dataset: 'production',
  },

  snipcart: {
    key:
      'OWQ1NGI5ZTUtNDViYi00NTBhLWFkOTItOWIzMjM1YTRiNmY2NjM3NDc2NzY1OTA4MDY0NTA1',
  },
  generate: {
    fallback: true,
    crawler: true,
  },
}
