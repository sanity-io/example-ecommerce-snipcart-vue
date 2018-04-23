module.exports = {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
