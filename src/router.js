import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Experiment from './views/Experiment.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'landing',
			component: Landing,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: ()=> import(/* webpackChunkName: "about" */ './views/About.vue'),
		},
		{
			path: '/experiment',
			name: 'experiment',
			component: ()=> import(/* webpackChunkName: "about" */ './views/Experiment.vue'),
		},
	],
})
