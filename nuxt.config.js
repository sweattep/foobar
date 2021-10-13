import fs from 'fs'
import * as path from 'path'

// Get all markdown files in ./content/articles
// and create routes for them
// https://www.netlifycms.org/docs/nuxt/
// https://dev.to/armiedema/pull-in-markdown-to-vue-with-nuxt-content-and-style-with-tailwind-typography-2em6
// https://vercel.com/guides/deploying-nuxtjs-with-vercel
// https://nuxtjs.org/deployments/vercel/
// https://content.nuxtjs.org/advanced/
// https://tskaggs.medium.com/host-your-personal-site-for-free-with-nuxt-js-gitlab-and-cloudflare-7fe038cfd079

const getPaths = () =>
  fs
    .readdirSync(path.resolve(__dirname, './content/articles'))
    .filter((filename) => path.extname(filename) === '.md')
    .map((filename) => `/blog/${path.parse(filename).name}`)

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
  generate: {
    routes: getPaths(),
    fallback: '404.html'
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
