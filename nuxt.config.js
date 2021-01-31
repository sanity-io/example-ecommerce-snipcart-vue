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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Snipcart styling
      {
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        type: 'text/css',
        rel: 'stylesheet',
      },
    ],
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
  },

  snipcart: {
    // Options available

    key:
      'OWQ1NGI5ZTUtNDViYi00NTBhLWFkOTItOWIzMjM1YTRiNmY2NjM3NDc2NzY1OTA4MDY0NTA1',
    /*    locales: {}, */
  },
  /*   generate: {
    routes: async function () {
      const paths = await client.fetch(`{
        "product": *[_type == "product"].slug.current,
        "category": *[_type == "category"].slug.current,
        "vendor": *[_type == "vendor"].slug.current
      }`)
      return Object.keys(paths).reduce(
        (acc, key) => [
          ...acc,
          ...paths[key].reduce((acc, curr) => [...acc, `${key}/${curr}`], []),
        ],
        []
      )
    },
  }, */
}
