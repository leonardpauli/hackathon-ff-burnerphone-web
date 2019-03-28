<template lang="pug">
.chat
	.header
	.messages
		Message(v-for="item in messages", :key="item.id", :item="item")
	.footer
		input.targetNumber(placeholder="Recipient phone number", v-model="draft.targetNumber", @keypress.enter="focusText", @keypress.tab="focusText")
		input.textMessage(ref="text", placeholder="Text message...", v-model="draft.text", @keypress.enter="send")
		button.send(@click="send") Send

</template>
<script>
import Message from './Message'

const newDraft = ()=> ({
	targetNumber: null,
	text: '',
	createdAt: null,
})

export default {
	components: {Message},
	props: {
		originNumber: {type: String, required: true},
	},
	data: ()=> ({
		draft: newDraft(),
		messages: [],
	}),
	methods: {
		send () {
			this.messages.push(this.draft)
			this.draft = newDraft()
		},
		focusText () {
			this.$refs.text.focus()
		},
	},
}
</script>
<style lang="stylus" scoped>
	
</style>
