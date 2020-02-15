<template id="prestige">
	<section>
		<h1>Get all the beans</h1>
		<UserList parent="prestige"></UserList>
		<MainNavigation></MainNavigation>
	</section>
</template>

<script>
import UserList from '@/components/UserList.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Prestige',
	components: {
		UserList,
		MainNavigation
	}
}
</script>
