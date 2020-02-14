<template id="product">
    <section>
        <action-bar :showBackButton="true">Back to all</action-bar>
        <h1>{{ $route.params.id }}</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
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
	},
	mounted() {
		console.log('this.$route.params.id')
		console.log(this.$route.params.id)
	}
}
</script>