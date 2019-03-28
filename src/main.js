import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import Meta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(Meta)

new Vue({
	router,
	mounted: ()=> document.dispatchEvent(new Event('x-app-rendered')),
	render: h=> h(App),
}).$mount('#app')
