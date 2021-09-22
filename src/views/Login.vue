<template>
	<v-container class="d-flex align-center h-100">
		<v-row class="justify-center">
			<v-col cols="12" class="d-flex justify-center">
				<v-card elevation="0" class="rounded-lg" width="420px">
					<v-card-text class="pa-15">
						<h2 class="text-h5 font-weight-bold mb-3">Sign in</h2>
						<v-form v-model="valid">
							<v-text-field dense rounded filled class="rounded-lg" type="email" v-model="emailAddress" label="Email Address" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" type="password" v-model="password" label="Password" required @keypress.enter="login({ emailAddress, password })"></v-text-field>
							<div class="d-flex">
								<v-btn elevation="0" x-large color="primary" block @click="login({ emailAddress, password })">
									Log in
								</v-btn>
							</div>
							<div class="mt-4 text-center">Yet to set your password?<router-link class="ml-2" to="/register">Register</router-link></div>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	import { mapActions } from "vuex"
	export default {
		name: "Login",
		data() {
			return {
				valid: false,
				emailAddress: "",
				password: "",
				confirmPassword: "",
			}
		},
		methods: {
			...mapActions(["login"]),
		},
	}
</script>
