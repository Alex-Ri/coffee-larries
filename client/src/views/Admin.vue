<template id="admin">
	<section>
		<h1>Hey Admin!</h1>
		<button style="padding:5px;margin:5px;border:1px solid #ccc;">Add new user</button>
		<router-link to="/admin/addcoffee" style="padding:5px;margin:5px;border:1px solid #ccc;">Add new coffee</router-link>
		<button style="padding:5px;margin:5px;border:1px solid #ccc;">Delete User</button>
		<button style="padding:5px;margin:5px;border:1px solid #ccc;">Delete Coffee</button>
		<hr>

		<UserList parent="admin"></UserList>

		<MainNavigation></MainNavigation>
	</section>
</template>

<script>
import UserList from '@/components/UserList.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Admin',
	components: {
		UserList,
		MainNavigation
	}
}
</script>
