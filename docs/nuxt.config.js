const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/heatmapjs-vue/'
  }
} : {}

module.exports = Object.assign(routerBase, {
  srcDir: __dirname,
  server: {
    host: '0.0.0.0',
    port: 3001 // default: 3000
  },
  build: {
    extractCSS: true,
    cssSourceMap: true,
    // postcss: [],
    extend (config) {
      config.devtool = 'source-map'
    }
  },

  loading: {
    color: '#59cc93'
  },

  manifest: {
    name: 'heatmapjs vue',
    description: 'heatmapjs component for Vue.js',
    theme_color: '#563d7c'
  },

  generate: {
    dir: 'docs-dist'
  },

  plugins: [{
    src: '~plugins/heatmapjs-vue.js',
    ssr: false
  },{
    src: '~plugins/json-editor.js',
    ssr: false
  }],

  modules: [
    '@nuxtjs/pwa'
  ],

  head: {
    title: '',
    meta: [{
      charset: 'utf-8'
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
    ],
    script: []
  },
  css: [
    '~assets/css/app.scss'
  ]
})
