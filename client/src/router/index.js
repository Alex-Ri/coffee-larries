import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductView from '../views/ProductView.vue'
import BuildCoffee from '../views/BuildCoffee.vue'
import Lobby from '../views/Lobby.vue'
import Prestige from '../views/Prestige.vue'
import UserAccount from '../views/UserAccount.vue'
import Admin from '../views/Admin.vue'
import Confirmation from '../views/Confirmation.vue'
import AddMe from '../views/AddMe.vue'
import AddCoffee from '../views/AddCoffee.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Lobby',
		component: Lobby
	},
	{
		path: '/product/:id',
		name: 'ProductView',
		component: ProductView,
		meta: {
			isChildPage: true
		}
	},
	{
		path: '/productlist',
		name: 'ProductListView',
		component: ProductListView
	},
	{
		path: '/buildcoffee/:id?',
		name: 'BuildCoffee',
		component: BuildCoffee
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
		path: '/confirmation',
		name: 'Confirmation',
		component: Confirmation
	},
	{
		path: '/addme',
		name: 'AddMe',
		component: AddMe
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
	},
	{
		path: '/admin/addcoffee',
		name: 'AddCoffee',
		component: AddCoffee
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
