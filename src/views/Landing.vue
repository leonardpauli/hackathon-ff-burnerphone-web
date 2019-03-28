<template lang="pug">
.landing
	h1 hello {{title}}

</template>
<script>
import config from '@/config'

export default {
	name: 'Landing',
	metaInfo: config.metaInfo,
	data: ()=> ({
		title: config.metaInfo.title,
	}),
	mounted () {
	},
	methods: {
	},
}
</script>
<style lang="stylus" scoped>
	
</style>
