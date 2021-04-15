export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ynov-eshop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
  	scripts: [
		{ src: 'https://js.stripe.com/v3' }
	],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
	"~/plugins/api.plugins.js",
	"~/plugins/jwt.plugins.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		"@nuxtjs/apollo"
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	},
	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint:"https://ynov-fullstack.herokuapp.com/graphql"
			}
		}
	},
	env: {
		API_URL: process.env.API_URL
	}
}
