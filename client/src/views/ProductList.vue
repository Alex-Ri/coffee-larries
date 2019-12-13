<template id="productlist">
    <section>
        <p style="text-align: center">
            coooooooffeeeeeeee
        </p>
        <router-link to="/product" class="main-nav__link main-nav__home-link">
            <svg class="main-nav__svg" width="22" height="25" viewBox="0 0 22 25">
                <path class="main-nav__home-shape" d="M20.0338 24.4895H14.5266C14.2367 24.4895 14.0435 24.2911 14.0435 23.9936V18.0432C14.0435 17.4482 13.5604 16.8531 12.8841 16.8531H9.11594C8.53623 16.8531 7.95652 17.349 7.95652 18.0432V23.9936C7.95652 24.2911 7.76328 24.4895 7.47343 24.4895H1.96618C1.67633 24.4895 1.48309 24.2911 1.48309 23.9936V9.41511C1.48309 9.21677 1.57971 9.11759 1.67633 9.01842L10.6618 1.5804C10.8551 1.38205 11.1449 1.38205 11.3382 1.5804L20.3237 9.01842C20.4203 9.11759 20.5169 9.31594 20.5169 9.41511V23.9936C20.5169 24.2911 20.3237 24.4895 20.0338 24.4895Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
        </router-link>
        
        <p>you have any more of those ... products?</p>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'


export default {
	name: 'ProductList',
	components: {
		MainNavigation
	}
}
</script>