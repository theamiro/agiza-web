export const getters = {
	isLoggedIn: (state) => !!state.token,
	getProduct: (state) => state.product,
	getProducts: (state) => state.products,
	getCustomerForm: (state) => state.customerForm,
	getCustomers: (state) => state.customers,
}
