<template id="productlistview">
    <section>
        <h1>All coffees you like</h1>
        <ProductList :element-as-link="true"></ProductList>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import MainNavigation from '@/components/MainNavigation.vue'


export default {
	name: 'ProductListView',
	components: {
		ProductList,
		MainNavigation
	}
}
</script>