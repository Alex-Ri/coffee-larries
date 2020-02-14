import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import BuildCoffee from '../views/BuildCoffee.vue'
import Lobby from '../views/Lobby.vue'
import Prestige from '../views/Prestige.vue'
import UserAccount from '../views/UserAccount.vue'
import Admin from '../views/Admin.vue'
import UserList from '../views/UserList.vue'
import Confirmation from '../views/Confirmation.vue'
import AddMe from '../views/AddMe.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Lobby',
		component: Lobby
	},
	{
		path: '/product:id',
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
		path: '/buildcoffee',
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
		path: '/userlist',
		name: 'UserList',
		component: UserList
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
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
