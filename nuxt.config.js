export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arnaud Gay',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }]
  },
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: 'smooth'
        });
      }

      return window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss', "vue-essential-slices/src/styles/styles.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  prismic: {
    endpoint: 'https://arnaudgay.cdn.prismic.io/api/v2'
    /* see configuration for more */

  },
  tailwindcss: {
    jit: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [["@nuxtjs/prismic", {
    "endpoint": "https://arnaudgay.cdn.prismic.io/api/v2",
    "apiOptions": {
      "routes": [{
        "type": "page",
        "path": "/:uid"
      }]
    }
  }], ["nuxt-sm"]],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  storybook: {
    stories: ["~/slices/**/*.stories.js"]
  },
  ignore: ["**/*.stories.js"],
  target: 'static'
};