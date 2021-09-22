<template>
	<v-container class="d-flex align-center h-100">
		<v-row class="justify-center">
			<v-col cols="12" class="d-flex justify-center">
				<v-card elevation="0" class="rounded-lg" width="420px">
					<v-card-text class="pa-15">
						<h2 class="text-h5 font-weight-bold">Create your Account</h2>
						<p class="">You have been added onto Agiza, enter your preferred password to create you account</p>
						<v-form v-model="valid">
							<v-text-field dense rounded filled class="rounded-lg" v-model="emailAddress" label="Email Address" required autofocus></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="password" label="Password" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="confirmPassword" label="Confirm Password" required></v-text-field>
							<div class="d-flex">
								<v-btn elevation="0" x-large color="primary" block @click="register({ emailAddress, password })">
									Create Account
								</v-btn>
							</div>
							<div class="mt-4 text-center">Already set your password?<router-link class="ml-2" to="/login">Log in</router-link></div>
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
		name: "Register",
		data() {
			return {
				valid: false,
				emailAddress: "",
				password: "",
				confirmPassword: "",
			}
		},
		methods: {
			...mapActions(["register"]),
		},
	}
</script>
