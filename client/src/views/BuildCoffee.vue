<template id="buildcoffee">
    <section>
        <h1>Build your coffee</h1>
        <p>Can is planned for 2:35 p.m. <button style="padding:5px;border:1px solid #ccc;" @click="foo('plop')">change</button></p><!-- time picker element, default time is now + 15min-->
        <router-link to="/userlist" class="main-nav__link main-nav__home-link">
            <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
                <div style="height:100px;width:100px;background:purple;margin-right:10px"></div>
                <p>Kaffee 1</p>
                <p>9,99 €</p>
            </div>
        </router-link>
        <router-link to="/userlist" class="main-nav__link main-nav__home-link">
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
	name: 'BuildCoffee',
	components: {
		MainNavigation
	},
	methods: {
		foo() {
			alert('this will open up a time picker or something like that, dunno')
		}
	}
}
</script>