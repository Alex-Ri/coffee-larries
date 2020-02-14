<template id="lobby">
    <section style="display:flex;flex-direction:column;">
        <h1>Lobby</h1>
        
        <!-- IF Coffee in the making && I'm not in already -->
        <router-link to="/addme" class="main-nav__link main-nav__home-link" style="padding:5px;margin:5px;border:1px solid #ccc;">Anja currently waits for coffee participants!</router-link>

        <!-- IF !(Coffee in the making && I'm in already) -->
        <!-- allow this button even if another coffee is in the making, cause maybe user wants a different one -->
        <router-link to="/buildcoffee" class="main-nav__link main-nav__home-link" style="padding:5px;margin:5px;border:1px solid #ccc;">Start coffee</router-link>
       <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Lobby',
	components: {
		MainNavigation
	}
}
</script>