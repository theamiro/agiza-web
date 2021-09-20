<template>
	<v-app>
		<navigation />
		<v-main style="background-color: #f5f5f5">
			<router-view />
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

		data: () => ({
			//
		}),
	}
</script>

<style lang="scss">
	@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>
