<template id="productview">
    <section>
        <action-bar :showBackButton="true">Back to all</action-bar>
        <Product :product-id="$route.params.id"></Product>
        <router-link :to="'/buildcoffee/' + $route.params.id" class="main-nav__link main-nav__home-link" style="padding:5px;margin:5px;border:1px solid #ccc;">Start coffee</router-link>
       
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import ActionBar from '@/components/ActionBar.vue'
import Product from '@/components/Product.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'ProductView',
	components: {
		ActionBar,
		Product,
		MainNavigation
	}
}
</script>