<template>
	<a class="back-button" v-on="listeners" aria-label="Navigate to previous screen">
		<svg width="14" height="23" viewBox="0 0 14 23" fill="none">
			<path d="M13 1L2 11.5L13 22" stroke="black" stroke-width="2" />
		</svg>
	</a>
</template>

<script>
export default {
	computed: {
		listeners () {
			return {
				...this.$listeners,
				click: () => {
					this.$router.back()
				}
			}
		}
	}
}
</script>

<style lang="css">
.back-button {
  border: 0;
  padding: 5px 7px;
  background-color: transparent;
  -webkit-appearance: none;
}
</style>
