/* global module process require */

module.exports = {
	lintOnSave: false,

	configureWebpack: config=> {
		addStylusNib(config)
	},

	pluginOptions: {
		prerenderSpa: {
			registry: undefined,
			renderRoutes: [
				'/',
			],
			useRenderEvent: true,
			headless: true,
			onlyProduction: true,
		},
	},
}

const addStylusNib = config=> {
	const concat = xs=> xs.reduce((a, b)=> a.concat(b))
	const unwrap = (xs, k)=> concat(xs.map(l=> l[k]))

	const stylusLoadersMain = config.module.rules
		.filter(r=> 'a.styl'.match(r.test) || 'a.stylus'.match(r.test))
	const stylusLoaders = unwrap(unwrap(stylusLoadersMain, 'oneOf'), 'use')
		.filter(l=> l.loader=='stylus-loader')

	const nib = require('nib')

	stylusLoaders.forEach((l, i)=> {
		const {options} = l
		options.import = options.import || []
		options.import.push('~nib/lib/nib/index.styl')
		options.import.push('~@/style/index')
	})
}
