export const getters = {
	isLoggedIn: (state) => !!state.token,
	isLoading: (state) => state.isLoading,
	getProduct: (state) => state.product,
	getProducts: (state) => state.products,
	getCustomerForm: (state) => state.customerForm,
	getCustomers: (state) => state.customers,
}
