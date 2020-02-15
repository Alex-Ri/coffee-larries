<template id="userlist">
	<section>
		<ul v-if="parent === 'buildCoffee'" style="list-style-type:none;">
			<li v-for="(user, key) in users" :key="key" style="padding:10px;margin-bottom:10px;">
				<input type="checkbox" name="user" :value="user.id" /><label>{{ user.firstname + ' ' + user.name }}</label>
			</li>
		</ul>

		<table v-if="parent === 'admin'">
			<tr>
				<th style="width:25%">Name</th>
				<th style="width:25%">Gram</th>
				<th style="width:25%">EUR</th>
				<th style="width:25%"></th>
			</tr>
			<tr v-for="(user, key) in users" :key="key">
				<td>{{ user.firstname + ' ' + user.name }}</td>
				<td>{{ user.totalGram }}</td>
				<td>{{ user.totalEuro }}</td>
				<td><button style="padding:5px;border:1px solid #ccc;">Paid</button></td>
			</tr>
		</table>

		<table v-if="parent === 'prestige'">
			<tr>
				<th>Name</th>
				<th>Prestige</th>
			</tr>
			<tr v-for="(user, key) in users" :key="key">
				<td>{{ user.firstname + ' ' + user.name }}</td>
				<td>{{ user.prestige }}</td>
			</tr>
		</table>
	</section>
</template>

<script>
export default {
	name: 'UserList',
	props: {
		parent: String
	},
	data() {
		return {
			users: []
		}
	},
	mounted() {
		this.users = this.getAllUsers()
	},
	methods: {
		getAllUsers() {
			// ::TODO::
			// return dummy data for now
			return [
				{
					id: 'alexr',
					name: 'Riss',
					firstname: 'Alex',
					totalGram: '22.8',
					totalEuro: '6.36',
					prestige: 2
				},
				{
					id: 'anjad',
					name: 'Dehn',
					firstname: 'Anja',
					totalGram: '22.8',
					totalEuro: '-2.99',
					prestige: 2
				},
				{
					id: 'rumeysay',
					name: 'Yagci',
					firstname: 'Rumeysa',
					totalGram: '22.8',
					totalEuro: '-0.98',
					prestige: 2
				}
			]
		}
	}
}
</script>
