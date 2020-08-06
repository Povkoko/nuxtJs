import pkg from './package'
require('dotenv').config();
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
 
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: "Millionize your potential" }     
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Milio_Icon.png' },
      { rel:"stylesheet", href:"https://use.fontawesome.com/releases/v5.8.2/css/all.css",integrity:"sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",crossorigin:"anonymous"},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap' }
    ],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        type: "text/javascript"
      },

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  loading : false,
  
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css'
  ],

  /*
   ** check all route before login
   */
  env: {
    api : process.env.BASE_URL,
    socket : process.env.SOCKET_URL,
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/pluginsglobal.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */

  modules: [
    'nuxt-sweetalert2',
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here 
    */
    extend(config, ctx) {
    }
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
