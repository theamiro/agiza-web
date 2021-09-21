export const mutations = {
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
}
