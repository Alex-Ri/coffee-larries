import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import Lobby from '../views/Lobby.vue'
import Prestige from '../views/Prestige.vue'
import UserAccount from '../views/UserAccount.vue'
import Admin from '../views/Admin.vue'
// import * as TransitionName from '@/utilities/enums/TransitionName'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Lobby',
		component: Lobby
	},
	{
		path: '/product',
		name: 'Product',
		component: Product,
		meta: {
			isChildPage: true
		}
	},
	{
		path: '/productlist',
		name: 'ProductList',
		component: ProductList
	},
	{
		path: '/prestige',
		name: 'Prestige',
		component: Prestige
	},
	{
		path: '/account',
		name: 'UserAccount',
		component: UserAccount
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin
	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// router.beforeEach((to, from, next) => {
// 	// `to` and `from` are both route objects
// 	if(to.meta && to.meta.hasChildTransition) {
// 		this.transitionName = TransitionName.SOFT_SLIDE_LEFT
// 	} else if (!this.navigatingBack) {
// 		this.transitionName = TransitionName.NONE
// 	}
// 	next()
// })

export default router
