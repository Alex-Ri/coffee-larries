<template id="productlist">
    <section>
        <h1>All coffees you like</h1>
        <router-link to="/product?id=kenia" class="main-nav__link main-nav__home-link">
            <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
                <div style="height:100px;width:100px;background:purple;margin-right:10px"></div>
                <p>Kaffee 1</p>
                <p>9,99 €</p>
            </div>
        </router-link>
        <router-link to="/product?id=geta-bore" class="main-nav__link main-nav__home-link">
            <div style="display:flex;flex-direction:row;justify-content:space-between;">
                <div style="height:100px;width:100px;background:pink;margin-right:10px"></div>
                <p>Kaffee 2</p>
                <p>12,30 €</p>
            </div>
        </router-link>
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