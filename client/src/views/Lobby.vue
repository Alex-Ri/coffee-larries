<template id="lobby">
    <section>
        <p style="text-align: center">
            Welcome to the real lobby
        </p>
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