<template id="prestige">
	<section>
		<h1>Get all the beans</h1>
		<table>
			<tr>
				<th>Name</th>
				<th>Prestige</th>
			</tr>
			<tr>
				<td>Anja D.</td>
				<td>****</td>
			</tr>
			<tr>
				<td>Alex R.</td>
				<td>***</td>
			</tr>
			<tr>
				<td>Emilio Y.</td>
				<td>**</td>
			</tr>
		</table>
		<MainNavigation></MainNavigation>
	</section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Prestige',
	components: {
		MainNavigation
	}
}
</script>
