import router from "@/router"
import * as mutations from "./mutation-types"
import { mockProducts, mockUsers, mockNotifications } from "../mock/"
import { Role } from "../helpers/Role"
const moment = require("moment")

// TODO: Add async actions
export const actions = {
	login: ({ commit }, credentials) => {
		commit(mutations.setIsLoading)
		const user = mockUsers.find((entry) => entry.emailAddress === credentials.emailAddress && entry.password === window.btoa(unescape(encodeURIComponent(credentials.password))))
		if (user) {
			const token = process.env.VUE_APP_DUMMY_TOKEN
			commit(mutations.setCurrentUser, user)
			commit(mutations.setToken, token)
			if (user.role === Role.Customer) {
				router.push({ name: "Marketplace" })
			} else {
				router.push({ name: "Customer" })
			}
		} else {
			console.log("Incorrect email or password")
		}
		commit(mutations.setIsLoaded)
	},
	register: ({ commit }, credentials) => {
		commit(mutations.setIsLoading)
		const user = mockUsers.find((entry) => entry.emailAddress === credentials.emailAddress)
		if (user && user.password === "") {
			user.password = window.btoa(unescape(encodeURIComponent(credentials.password)))
		}
		router.push("Login")
		commit(mutations.setIsLoaded)
	},
	addCustomer: ({ commit, state, getters }) => {
		commit(mutations.setIsLoading)
		commit(mutations.setCustomerForm, state.customerForm)
		const { firstName, lastName, emailAddress, phoneNumber, country } = getters.getCustomerForm
		const customer = {
			id: mockUsers.length + 1,
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			country: country,
			role: Role.Customer,
		}
		mockUsers.push(customer)
		commit(mutations.addCustomer, customer)
		commit(mutations.clearCustomerForm)
		commit(mutations.setIsLoaded)
	},
	logout: ({ commit }) => {
		commit(mutations.setIsLoading)
		commit(mutations.logout)
		router.push({ name: "Login" })
		commit(mutations.setIsLoaded)
	},
	fetchProducts: ({ commit, getters }) => {
		commit(mutations.setIsLoading)
		var products = mockProducts
		if (!getters.isAgent) {
			products = products.filter((product) => product.location.includes(getters.getCurrentUser.country))
		}
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
	fetchCustomers: ({ commit }) => {
		commit(mutations.setIsLoading)
		const customers = mockUsers.filter((user) => Role.Customer === user.role)
		commit(mutations.setCustomers, customers)
		commit(mutations.setIsLoaded)
	},
	fetchNotifications: ({ commit }) => {
		commit(mutations.setIsLoading)
		const notifications = JSON.parse(localStorage.getItem("notifications")) || mockNotifications
		commit(mutations.setNotifications, notifications)
		commit(mutations.setIsLoaded)
	},
	placeOrder: ({ commit, getters }, product) => {
		commit(mutations.setIsLoading)
		const notification = {
			id: getters.getNotifications.length + 1,
			customerName: getters.getCurrentUser.emailAddress,
			product: product.title,
			time: `${moment(Date.now()).format("DD/MM/YYYY, h:mm:ss a")}`,
		}
		commit(mutations.placeOrder, product)
		commit(mutations.sendNotification, notification)
		commit(mutations.setIsLoading)
	},
}
