<template>
  <div>
    <h1>{{ product.brand }} {{ product.name }}</h1>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
	props: {
		productId: String
	},
	data() {
		return {
			product: {
				name: '',
				id: '',
				brand: '',
				description: '',
				price: ''
			}
		}
	},
	mounted() {
		this.product = this.getProduct(this.productId)
	},
	methods: {
		getProduct(id) {
			// ::TODO::
			// return dummy data for now
			return {
				name: 'dummy-'+id,
				id: id,
				brand: 'dummy brand',
				description: 'lorem ipsum dolor sit amet',
				price: '9,99'
			}
		}
	}
}
</script>

<style></style>
