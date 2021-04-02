import config from './config/index'

export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Pop!_OS by System76',

    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },

      { name: 'theme-color', content: '#6ACAD8' },
      { name: 'msapplication-TileColor', content: '#46bac8' },

      { name: 'application-name', content: 'Pop!_OS by System76' },
      { name: 'apple-mobile-web-app-title', content: 'Pop!_OS' },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Pop!_OS by System76' },
      { name: 'og:description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },
      { name: 'og:image', content: 'https://pop.system76.com/icon.png' },
      { name: 'og:url', content: 'https://pop.system76.com' },

      { name: 'twitter:site', content: '@system76' },
      { name: 'twitter:title', content: 'Pop!_OS by System76' },
      { name: 'twitter:description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },
      { name: 'twitter:image', content: 'https://pop.system76.com/icon.png' }
    ],

    link: [
      { rel: 'manifest', href: '/manifest.json' },

      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32.png' },
      { rel: 'application-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#46bac8' }
    ],

    script: [
      {
        async: true,
        defer: true,
        'data-domain': 'pop.system76.com',
        src: 'https://plausible.io/js/plausible.js'
      },
      {
        innerHTML: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }'
      }
    ],

    __dangerouslyDisableSanitizers: ['script']
  },

  build: {
    transpile: [
      /@system76/
    ]
  },

  css: [
    '@system76/design/dist/index.common.css',
    '@system76/components/dist/index.common.css',
    '@system76/forms/dist/index.common.css',
    '~/assets/styles/main.css'
  ],

  env: config,

  loading: {
    color: '#6ACAD8'
  },

  buildModules: [
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/color-mode'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  plugins: [
    '~/plugins/components',
    '~/plugins/design',
    '~/plugins/forms',
    '~/plugins/hal',
    '~/plugins/lazyload'
  ],

  optimizedImages: {
    optimizeImages: true
  },

  auth: {
    redirect: {
      callback: '/auth/callback',
      login: '/auth/login',
      logout: '/auth/logout'
    },
    strategies: {
      system76: {
        scheme: '~/modules/auth-schema',
        grantType: 'authorization_code',
        responseType: 'code',
        clientId: config.AUTH_CLIENT_ID,
        scope: ['profile:write'],
        endpoints: {
          authorization: `${config.AUTH_URL}/oauth/authorize`,
          token: `${config.AUTH_URL}/oauth/token`,
          userInfo: `${config.AUTH_URL}/api/settings`,
          logout: `${config.AUTH_URL}/logout?redirect_uri=${encodeURIComponent(config.PUBLIC_URL)}`
        },
        user: {
          property: 'user'
        }
      }
    }
  }
}
