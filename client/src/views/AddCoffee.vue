<template id="addcoffee">
    <section>
        <h1 style="">Create a new coffee entry</h1>

        <form @submit.prevent="sendForm()">
            <input type="text" name="brand" placeholder="Brand" v-model="coffee.brand" />
            <input type="text" name="name" placeholder="Name" v-model="coffee.name" />
            <input type="text" name="price" placeholder="Price" v-model="coffee.price" />
            <input type="text" name="description" placeholder="Description" v-model="coffee.description" />
            <input type="file" name="imagefile" placeholder="Image" accept="image/*" />
        </form>

        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Admin',
	components: {
		MainNavigation
	},
	data() {
		return {
			coffee: {
				brand: '',
				name: '',
				price: '',
				description: ''
			}
		}
	},
	methods: {
		sendForm() {

		}
	}
}
</script>