<template>
	<v-app>
		<navigation />
		<v-main style="background-color: #f5f5f5">
			<router-view class="px-15" />
		</v-main>
	</v-app>
</template>

<script>
	import Navigation from "./components/Navigation.vue"
	export default {
		name: "App",
		components: {
			Navigation,
		},
	}
</script>

<style lang="scss">
	@import "~@/assets/scss/index";
</style>
