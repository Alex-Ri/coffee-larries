<template id="confirmation">
    <section>
        <p style="text-align: center">So you make a can!</p>
        <p style="text-align: center">Whos in:</p>
        <ul>
            <li>Anja D.</li>
            <li>Emilio Y.</li>
            <li>Alex R.</li>
        </ul>
        <p style="text-align: center">What:</p>
        <p>Kenia (9,99 €), full can</p>
        <div style="display:flex;flex-direction:row;justify-content:space-between;margin-bottom:10px;">    
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:red;width:45%">No no no</router-link>
            <router-link to="/" class="main-nav__link main-nav__home-link" style="background:green;width:45%">Correct! Let's go</router-link>
        </div>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Confirmation',
	components: {
		MainNavigation
	}
}
</script>