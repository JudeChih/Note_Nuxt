const webpack = require('webpack');
export default {
	mode: 'universal',
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	// 解析靜態頁用
	// router: {
	// 	base: '../dist/',
	// 	mode: 'hash'
	// },
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#000' },
	/*
	** Global CSS
	*/
	css: [
		'element-ui/lib/theme-chalk/index.css',
		'@/assets/sass/app.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'@/plugins/element-ui',
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
	],
	/*
	** Build configuration
	*/
	build: {
		transpile: [/^element-ui/],
		plugins: [
			new webpack.ProvidePlugin({
				'$' : 'jquery'
			})
		],
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
