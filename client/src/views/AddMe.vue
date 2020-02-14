<template id="admin">
    <section>
        <h1 style="">Want a cup?</h1>
        <p>Anja D. brews  <router-link to="/product?id=baroestakenia">Kenia</router-link></p>
        <p>Emilio Y. and Alex R. are in already</p>

        <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:blue;width:45%;padding:5px;">Cancel</router-link>
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:green;width:45%;padding:5px;">Me too!</router-link>
        </div>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Admin',
	components: {
		MainNavigation
	}
}
</script>