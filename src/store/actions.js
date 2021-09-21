import router from "@/router"
import * as mutations from "./mutation-types"

export const actions = {
	login: ({ commit }) => {
		const token = process.env.VUE_APP_DUMMY_TOKEN
		console.log(token)
		commit(mutations.setToken, token)
		router.push("/marketplace")
	},
	logout: ({ commit }) => {
		commit(mutations.logout)
		router.push("/login")
	},
	fetchProducts: ({ commit }) => {
		const products = [
			{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
			{ id: "2", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
			{ id: "3", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
			{ id: "4", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
		]
		commit(mutations.setProducts, products)
	},
	fetchProductByID: ({ commit }) => {
		const product = {
			id: "1",
			image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
			title: "Dynamic Rayshield",
			description: "Lorem ipsum dolor sit amet",
			currency: "KES",
			price: 2000,
			numberInStock: 200,
			location: "",
		}
		commit(mutations.setProduct, product)
	},
	addCustomer: ({ commit, state, getters }) => {
		commit(mutations.setCustomerForm, state.customerForm)
		const { firstName, lastName, emailAddress, phoneNumber, country } = getters.getCustomerForm
		const customer = {
			id: getters.getCustomers.length + 1,
			firstName: firstName,
			lastName: lastName,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			country: country,
		}
		commit(mutations.addCustomer, customer)
		commit(mutations.clearCustomerForm)
	},
	fetchCustomers: ({ commit }) => {
		const customers = [
			{ id: "1", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
			{ id: "2", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
			{ id: "3", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
			{ id: "4", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
			{ id: "5", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
			{ id: "6", firstName: "Johansen", lastName: "Doe", emailAddress: "johndoe@mail.com", phoneNumber: "+25470000400", country: "Kenya" },
		]
		commit(mutations.setCustomers, customers)
	},
}
