<template id="main-page">
	<v-ons-page>
		<v-ons-toolbar>
			<div class="center">Coffees</div>
		</v-ons-toolbar>

		<v-ons-tabbar>
			<template slot="pages">
				<CoffeeList></CoffeeList>
				<Lobby></Lobby>
				<Prestige></Prestige>
				<Account></Account>
				<Admin></Admin>
			</template>
			<v-ons-tab v-for="tab in tabs"
				:key="tab.key"
				:icon="tab.icon"
				:label="tab.label"
				:badge="tab.badge"
				:page="tab"
			></v-ons-tab>
		</v-ons-tabbar>
	</v-ons-page>
</template>

<script>

import CoffeeList from './CoffeeList.vue'
import Lobby from './Lobby.vue'
import Prestige from './Prestige.vue'
import Account from './Account.vue'
import Admin from './Admin.vue'

export default {
	name: 'home',
	components: {
		CoffeeList,
		Lobby,
		Prestige,
		Account,
		Admin
	},
	data() {
		return {
			activeIndex: 0,
			tabs: [
				{
					icon: 'icon-home',
					label: 'Coffee',
					key: 'coffeelist',
					page: {template: '#coffeelist'},
				},
				{
					icon: 'icon-home',
					label: 'Lobby',
					key: "lobby",
					page: {template: '#lobby'},
				},
				{
					icon: 'icon-home',
					label: 'Prestige',
					key: "prestige",
					page: {template: '#prestige'},
				},
				{
					icon: 'icon-home',
					label: 'Account',
					key: "account",
					page: {template: '#account'},
				},
				{
					icon: 'icon-home',
					label: 'Admin',
					key: "admin",
					page: {template: '#admin'},
				}
			]
		}
	},
	methods: {
		md() {
			return this.$ons.platform.isAndroid()
		}
	},
	computed: {
		title() {
			return this.tabs[this.activeIndex].label
		}
	}
}
</script>
