<template>
	<v-container>
		<v-row class="justify-center">
			<v-col cols="12 d-flex justify-center">
				<v-card elevation="0" class="rounded-lg" width="420px">
					<v-card-text class="pa-15">
						<h2 class="text-h5 font-weight-bold">Add Customer</h2>
						<p class="">Enter customer information to add them onto agiza platform</p>
						<v-form v-model="valid">
							<v-text-field dense rounded filled class="rounded-lg" v-model="firstName" label="First Name" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="lastName" label="Last Name" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="emailAddress" label="Email Address" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="phoneNumber" label="Phone Number" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="country" label="Country" required></v-text-field>
							<div class="d-flex">
								<v-btn elevation="0" x-large color="primary" block>
									Add Customer
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
	export default {
		name: "AddCustomer",
		data() {
			return {
				valid: false,
				firstName: "",
				lastName: "",
				emailAddress: "",
				phoneNumber: "",
				country: "",
			}
		},
	}
</script>
