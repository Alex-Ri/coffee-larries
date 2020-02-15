<template>
    <div>
        <span v-if="elementAsLink">
            <router-link 
                v-for="(coffee, key) in coffeeList" 
                :key="key" 
                :to="'/product/' + coffee.id" 
                class="main-nav__link main-nav__home-link">
                <div tyle="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
                    <div style="height:100px;width:100px;background:purple;margin-right:10px"></div>
                    <p>{{ coffee.name }}</p>
                    <p>{{ coffee.price }}</p>
                </div>
            </router-link>
        </span>
        <ul v-if="!elementAsLink">
            <li v-for="(coffee, key) in coffeeList" 
                :key="key" 
                @click="handleClickMethod(coffee.id)" 
                style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
                <div style="height:100px;width:100px;background:purple;margin-right:10px"></div>
                <p>{{ coffee.name }}</p>
                <p>{{ coffee.price }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
	props: {
		elementAsLink: Boolean,
		eventOnClick: String
	},
	data() {
		return {
			coffeeList: {}
		}
	},
	mounted() {
		this.coffeeList = this.getAllCoffee()
	},
	methods: {
		handleClickMethod(id) {
			// this only fires an predefined event for the parent component
			this.$emit(this.eventOnClick, { id: id })
		},
		getAllCoffee() {
			// ::TODO::
			// return dummy data for now
			return [
				{
					name: 'Kenia',
					id: 'kenia',
					brand: 'Baroesta',
					description: 'lorem ipsum dolor sit amet',
					price: '9,99'
				},
				{
					name: 'Toleyo',
					id: 'toleyo',
					brand: 'Coffee Circle',
					description: 'lorem ipsum dolor sit amet',
					price: '9,99'
				}
			]
		}
	}
}
</script>

<style></style>
