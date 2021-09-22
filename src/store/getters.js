import { Role } from "../helpers/Role"

export const getters = {
	isLoggedIn: (state) => !!state.token,
	isAgent: (state) => state.currentUserRole === Role.Agent,
	isLoading: (state) => state.isLoading,
	getProduct: (state) => state.product,
	getProducts: (state) => state.products,
	getCustomerForm: (state) => state.customerForm,
	getCustomers: (state) => state.customers,
}
