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
}
