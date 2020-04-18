export default {
  mode: 'spa',

  head: {
    title: 'Pop!_OS by System76',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@system76/design/dist/index.common.css',
    '@system76/components/dist/index.common.css',
    '@system76/forms/dist/index.common.css',
    '~/assets/styles/main.css'
  ],

  loading: {
    color: '#fff'
  },

  buildModules: [
    '@nuxtjs/color-mode',
    '@aceforth/nuxt-optimized-images'
  ],

  plugins: [
    '~/plugins/asset-components',
    '~/plugins/components',
    '~/plugins/design',
    '~/plugins/forms',
    '~/plugins/lazyload'
  ],

  optimizedImages: {
    optimizeImages: true
  }
}
