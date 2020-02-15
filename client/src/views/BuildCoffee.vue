<template id="buildcoffee">
    <section>
        <h1>Build your coffee</h1>
        <p>Can is planned for 2:35 p.m. <button style="padding:5px;border:1px solid #ccc;" @click="foo('plop')">change</button></p><!-- time picker element, default time is now + 15min-->
        <ProductList v-if="!$route.params.id" :element-as-link="false" event-on-click="selectCoffee" @selectCoffee="selectCoffee($event)"></ProductList>
        <Product v-if="$route.params.id" :product-id="$route.params.id"></Product>

        <div>
            Grinding-Level: 
            <label for="grinding-fine">Fine</label><input type="radio" id="grinding-fine" name="grinding" value="fine" v-model="coffee.grinding" :checked="coffee.grinding === 'fine' ? 'checked' : ''" />
            <label for="grinding-rough">Rough</label><input type="radio" id="grinding-rough" name="grinding" value="rough" v-model="coffee.grinding" :checked="coffee.grinding === 'rough' ? 'checked' : ''" />
        </div>

        <div>
            <select name="filling" v-model="coffee.filling">
                <option v-for="(label, value) in fillingOptions[coffee.grinding]" :key="value" :value="value" >{{ label }}</option>
            </select>
        </div>

        <UserList parent="buildCoffee"></UserList>

        <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:blue;width:45%;padding:5px;">Cancel</router-link>
            <button @click="enquireCreateCoffee()" class="main-nav__link main-nav__home-link" style="background:green;width:45%;padding:5px;">Create One</button>
        </div>
    </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import Product from '@/components/Product.vue'
import UserList from '@/components/UserList.vue'

export default {
	name: 'BuildCoffee',
	components: {
		ProductList,
		Product,
		UserList
	},
	data() {
		return {
			coffee: {
				id: '',
				grinding: 'fine',
				filling: '45'
			},
			fillingOptions: {
				'fine': {
					'22.5': 'Half Can - 3 Spoons',
					'45': 'Full Can - 6 Spoons'
				},
				'rough': {
					'32.5': 'Half Can - 4 Spoons',
					'65': 'Full Can - 8 Spoons'
				}
			}
		}
	},
	mounted() {
		// preselected coffee?
		if(this.$route.params.id) {
			this.coffee.id = this.$route.params.id
		}
	},
	methods: {
		foo() {
			alert('this will open up a time picker or something like that, dunno')
		},
		enquireCreateCoffee() {
			// ::TODO::
			// PopUp "you want to create the following ... ?"
			alert('you will create ' + this.coffee.id + ', ' + this.coffee.filling)
		},
		createCoffee() {
			// ::TODO::
			console.log('CREATE COFFEE')
		},
		selectCoffee(params) {
			this.coffee.id = params.id
		}
	}
}
</script>