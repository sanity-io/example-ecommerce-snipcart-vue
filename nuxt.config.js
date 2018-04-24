module.exports = {
  /*
  ** Snipcart
  */
  snipcart: {
    apiKey: 'ODRkNmJhZDktOTk5YS00Y2Y1LTk5Y2ItMTkzNTlkZTYxNzhmNjM2NTk1NTI2OTgyMTc1MTUy'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'ecommerce-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sanity frontend example for E-commerce in Vue.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Snipcart styling
      {
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        type : 'text/css',
        rel: 'stylesheet'
      }
    ],
    script: [
      // jQuery. Only needed for snipcart
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'
      },
      // Snipcart js
      {
        src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        id: 'snipcart',
        'data-autopop': 'false',
        // Change me. Read more at http://snipcart.com
        'data-api-key': 'ODRkNmJhZDktOTk5YS00Y2Y1LTk5Y2ItMTkzNTlkZTYxNzhmNjM2NTk1NTI2OTgyMTc1MTUy'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load categories and vendors
  */
  plugins: [
    '~/plugins/globalData'
  ],
  /*
  ** Global CSS
  */
  css: [
    '~/css/global.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** postcss
    */
    postcss: [
      require('postcss-cssnext')(),
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
