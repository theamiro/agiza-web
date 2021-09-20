<template>
	<v-container class="d-flex align-center h-100">
		<v-row class="justify-center">
			<v-col cols="12" class="d-flex justify-center">
				<v-card elevation="0" class="rounded-lg" width="420px">
					<v-card-text class="pa-15">
						<h2 class="text-h5 font-weight-bold">Sign in</h2>
						<p class="">Login to find all that you have been looking for. Edge your business forward with super deals.</p>
						<v-form v-model="valid" onSubmit>
							<v-text-field dense rounded filled class="rounded-lg" v-model="emailAddress" label="Email Address" required autofocus></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="password" label="Password" required @keypress.enter="login({ emailAddress, password })"></v-text-field>
							<div class="d-flex">
								<v-btn elevation="0" x-large color="primary" block @click="login({ emailAddress, password })">
									Log in
								</v-btn>
							</div>
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
			...mapActions([["login"]]),
		},
	}
</script>
