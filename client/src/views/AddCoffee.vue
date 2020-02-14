<template id="addcoffee">
    <section>
        <h1 style="">Create a new coffee entry</h1>

        <form @submit.prevent="sendForm()">
            <input type="text" name="brand" placeholder="Brand" v-model="coffee.brand" />
            <input type="text" name="name" placeholder="Name" v-model="coffee.name" />
            <input type="text" name="price" placeholder="Price" v-model="coffee.price" />
            <input type="text" name="description" placeholder="Description" v-model="coffee.description" />
            <input type="file" name="imagefile" placeholder="Image" accept="image/*" />
        
            <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
                <router-link to="/admin" class="main-nav__link main-nav__home-link" style="background:blue;width:45%;padding:5px;">Cancel</router-link>
                <button type="submit" class="main-nav__link main-nav__home-link" style="background:green;width:45%;padding:5px;">Submit</button>
            </div>
        </form>
    </section>
</template>

<script>
export default {
	name: 'Admin',
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
			console.log('submit')
		}
	}
}
</script>