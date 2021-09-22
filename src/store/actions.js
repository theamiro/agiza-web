import router from "@/router"
import * as mutations from "./mutation-types"
import { mockProducts, mockUsers, mockNotifications } from "../mock/"
import { Role } from "../helpers/Role"

export const actions = {
	login: ({ commit }, user) => {
		commit(mutations.setIsLoading)
		const token = process.env.VUE_APP_DUMMY_TOKEN
		console.log(user)

		commit(mutations.setToken, token)
		commit(mutations.setCurrentUser, { emailAddress: user.emailAddress, password: user.password, role: Role.Agent })
		router.push({ name: "Marketplace" })
		commit(mutations.setIsLoaded)
	},
	register: ({ commit }, user) => {
		commit(mutations.setIsLoading)
		const entry = mockUsers.filter((entry) => entry.emailAddress === user.emailAddress)
		if (entry.length > 0) {
			console.log(true, entry[0])
		}
		commit(mutations.setIsLoaded)
	},
	logout: ({ commit }) => {
		commit(mutations.setIsLoading)
		commit(mutations.logout)
		router.push({ name: "Login" })
		commit(mutations.setIsLoaded)
	},
	fetchProducts: ({ commit }) => {
		commit(mutations.setIsLoading)
		const products = mockProducts
		commit(mutations.setProducts, products)
		commit(mutations.setIsLoaded)
	},
	fetchProductByID: ({ commit, getters }, id) => {
		commit(mutations.setIsLoading)
		const products = getters.getProducts
		const product = products.filter((item) => id === item.id)
		commit(mutations.setProduct, product[0])
		commit(mutations.setIsLoaded)
	},
	addCustomer: ({ commit, state, getters }) => {
		commit(mutations.setIsLoading)
		commit(mutations.setCustomerForm, state.customerForm)
		const { firstName, lastName, emailAddress, phoneNumber, country } = getters.getCustomerForm
		const customer = {
			id: Math.floor(Math.random() * 100),
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			country: country,
			role: Role.Customer,
		}
		commit(mutations.addCustomer, customer)
		commit(mutations.clearCustomerForm)
		console.log(router.base)
		commit(mutations.setIsLoaded)
	},
	fetchCustomers: ({ commit }) => {
		commit(mutations.setIsLoading)
		const customers = mockUsers.filter((user) => Role.Customer === user.role)
		commit(mutations.setCustomers, customers)
		commit(mutations.setIsLoaded)
	},
	fetchNotifications: ({ commit }) => {
		commit(mutations.setIsLoading)
		const notifications = mockNotifications
		commit(mutations.setNotifications, notifications)
		commit(mutations.setIsLoaded)
	},
}
