<template id="product">
    <section>
        <action-bar :showBackButton="true">Produkte</action-bar>
        <p style="text-align: center">
            this is one good coffee
        </p>
        <MainNavigation></MainNavigation>
    </section>
</template>

<script>
import ActionBar from '@/components/ActionBar.vue'
import MainNavigation from '@/components/MainNavigation.vue'

export default {
	name: 'Product',
	components: {
		ActionBar,
		MainNavigation
	}
}
</script>