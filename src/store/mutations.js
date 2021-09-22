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
	setCurrentUser: (state, user) => {
		state.currentUser = user
	},
	logout: (state) => {
		state.currentUser = {}
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
	setNotifications: (state, notifications) => {
		state.notifications = notifications
	},
	sendNotification: (state, notification) => {
		state.notifications.push(notification)
	},
}
