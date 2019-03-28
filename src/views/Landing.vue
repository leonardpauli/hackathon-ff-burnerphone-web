<template lang="pug">
.landing
	h1 hello

</template>
<script>
const canonical = 'https://site.se'
const siteimage = canonical+'/img/social/social-banner@1x.png'
const title = '...'
const desc = '...'

export default {
	name: 'Landing',
	metaInfo: {
		title: '...',
		titleTemplate: '... - %s',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			// see https://alligator.io/vuejs/vue-seo-tips/

			// {name: 'viewport'. content: 'width=device-width, initial-scale=1'},

			{rel: 'canonical', href: canonical},

			{name: 'description', content: desc},

			// OpenGraph data (Most widely used)
			{property: 'og:title', content: title},
			{property: 'og:site_name', content: 'CodeVillage'},
			// The list of types is available here: http://ogp.me/#types
			{property: 'og:type', content: 'website'},
			// Should the the same as your canonical link, see below.
			{property: 'og:url', content: canonical},
			{property: 'og:image', content: siteimage},
			// Often the same as your meta description, but not always.
			{property: 'og:description', content: desc},

			// Twitter card
			{name: 'twitter:card', content: 'summary'},
			{name: 'twitter:site', content: canonical},
			{name: 'twitter:title', content: title},
			{name: 'twitter:description', content: desc},
			// Your twitter handle, if you have one.
			{name: 'twitter:creator', content: '@leonardpauli'},
			{name: 'twitter:image:src', content: siteimage},

			// Google / Schema.org markup:
			{itemprop: 'name', content: title},
			{itemprop: 'description', content: desc},
			{itemprop: 'image', content: siteimage},
		],
	}, data: ()=> ({
	}),
	mounted () {
	},
	methods: {
	},
}
</script>
<style lang="stylus" scoped>
	
</style>
