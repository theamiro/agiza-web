<template>
	<v-app-bar app elevation="0" color="white" light>
		<v-container class="px-15">
			<v-row class="align-center">
				<v-col class="d-flex justify-space-between">
					<div class="d-flex align-center">
						<router-link to="/marketplace" class="text-decoration-none"><h1 class="text--black font-weight-medium">agiza</h1></router-link>
					</div>

					<div class="d-flex align-center">
						<v-btn v-if="isLoggedIn && isAgent" to="/marketplace" elevation="0" class="ml-3">Marketplace</v-btn>
						<v-btn v-if="!isLoggedIn" to="/login" elevation="0" class="ml-3">Login</v-btn>
						<v-btn v-if="!isLoggedIn" to="/register" elevation="0" class="ml-3">Register</v-btn>
						<v-btn v-if="isLoggedIn && isAgent" to="/customers" elevation="0" class="ml-3">Customer</v-btn>
						<v-btn v-if="isLoggedIn && isAgent" to="/notifications" elevation="0" class="ml-3">Notifications</v-btn>
						<v-btn v-if="isLoggedIn" elevation="0" class="ml-3" @click="logout()">Logout</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>
<script>
	import { mapActions, mapGetters } from "vuex"
	export default {
		name: "Navigation",
		methods: {
			...mapActions(["logout"]),
		},
		computed: {
			...mapGetters(["isLoggedIn", "isAgent"]),
		},
	}
</script>
