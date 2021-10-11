export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'foobar',
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
  /* 
  read from the dist folder and generate slugs and content for each file:
  https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  
  create a bookmarking app: 
  https://www.smashingmagazine.com/2019/10/bookmarking-application-faunadb-netlify-11ty/

  live editing:
  We didn't exist in the other papers. We were neither born, we didn't get married, we didn't die, we didn't fight in any wars, we never participated in anything of a scientific achievement. We were truly invisible unless we committed a crime

  */
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/articles).map(file => {
        console.log('file:', file)
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/articles/${file}`),
        };
      });
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://content.nuxtjs.org/snippets/
    '@nuxt/content',
  ],
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },
  /* Content Module URLs:
  /_content/articles: list the files in content/articles/
  /_content/articles/hello-world: get hello-world.md as JSON
  /_content/index: get index.md as JSON
  /_content/settings: get settings.json as JSON
  /_content: list index and settings
  */
  // Content Module Hooks: https://content.nuxtjs.org/advanced#contentoptions
  hooks: {
    'content:options': (options) => {
      console.log('Content options:', options)
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
