export const mutations = {
	setIsLoading: (state) => {
		state.isLoading = true
	},
	setIsLoaded: (state) => {
		state.isLoading = false
	},
	setToken: (state, token) => {
		state.token = token
	},
	logout: (state) => {
		state.token = null
	},
	setProduct: (state, product) => {
		state.product = product
	},
	setProducts: (state, products) => {
		state.products = products
	},
	setCustomers: (state, customers) => {
		state.customers = customers
	},
	addCustomer: (state, customer) => {
		state.customers.push(customer)
	},
	setCustomerForm: (state, form) => {
		state.customerForm = form
	},
	clearCustomerForm: (state) => {
		state.customerForm = {}
	},
}
