<template lang="pug">
.message
	.text {{item.text}}

</template>
<script>
import config from '@/config'

export default {
	props: {
		item: {type: Object, required: true},
	},
	methods: {
	},
}
</script>
<style lang="stylus" scoped>
	
</style>
