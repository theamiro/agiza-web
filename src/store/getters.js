import { Role } from "../helpers/Role"

export const getters = {
	isLoggedIn: (state) => !!state.token,
	isAgent: (state) => state.currentUser.role === Role.Agent,
	isLoading: (state) => state.isLoading,
	getProduct: (state) => state.product,
	getProducts: (state) => state.products,
	getCustomerForm: (state) => state.customerForm,
	getCustomers: (state) => state.customers,
	getNotifications: (state) => state.notifications,
}
