<template id="main-page">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Title</div>
    </v-ons-toolbar>

		<v-ons-tabbar>
			<template slot="pages">
				<CoffeeList></CoffeeList>
				<SpecialThanks></SpecialThanks>
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
// @ is an alias to /src
import SpecialThanks from './SpecialThanks.vue'
import CoffeeList from './CoffeeList.vue'

export default {
	name: 'home',
	components: {
		SpecialThanks,
		CoffeeList
	},
	data() {
		return {
			activeIndex: 0,
			tabs: [
				{
					icon: this.md() ? null : 'icon-home',
					label: 'Coffee',
					key: 'coffeelist',
					page: {template: '#coffeelist'},
				},
				{
					icon: this.md() ? null : 'icon-home',
					label: 'Credits',
					key: "credits",
					page: {template: '#credits'},
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
