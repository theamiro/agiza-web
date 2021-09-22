<template>
	<v-container class="">
		<v-row>
			<v-col cols="12">
				<h1>Customers</h1>
			</v-col>
		</v-row>
		<v-row class="">
			<v-col xl="9" lg="8" md="6">
				<v-simple-table v-if="customers.length">
					<template v-slot:default>
						<thead>
							<tr>
								<th>Customer ID</th>
								<th>Full Name</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Country</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="customer in customers" :key="customer.id">
								<td>{{ customer.id }}</td>
								<td>{{ customer.firstName }} {{ customer.lastName }}</td>
								<td>{{ customer.emailAddress }}</td>
								<td>{{ customer.phoneNumber }}</td>
								<td>{{ customer.country }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
				<EmptyState v-else :message="`There aren't any customers yet. Fill the form to create the First!`" />
			</v-col>
			<v-col xl="3" lg="4" md="6" class="">
				<v-card elevation="0" class="rounded-lg">
					<v-card-text class="pa-10">
						<h2 class="text-h5 font-weight-bold">Add Customer</h2>
						<p class="">Enter customer information to add them onto agiza platform</p>
						<v-form>
							<v-text-field dense rounded filled class="rounded-lg" v-model="customerForm.firstName" label="First Name" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="customerForm.lastName" label="Last Name" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="customerForm.emailAddress" label="Email Address" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="customerForm.phoneNumber" label="Phone Number" required></v-text-field>
							<v-text-field dense rounded filled class="rounded-lg" v-model="customerForm.country" label="Country" required></v-text-field>
							<div class="d-flex">
								<v-btn elevation="0" x-large color="primary" block @click="addCustomer()">
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
	import { mapActions, mapState } from "vuex"
	import EmptyState from "../components/EmptyState.vue"
	export default {
		name: "AddCustomer",
		data() {
			return {
				isValid: !!this.customerForm,
			}
		},
		components: {
			EmptyState,
		},
		created() {
			this.fetchCustomers()
		},
		watch: {},
		methods: {
			...mapActions(["fetchCustomers", "addCustomer"]),
		},
		computed: {
			...mapState(["customers", "customerForm", "isLoading"]),
		},
	}
</script>
