export const mutations = {
	setToken: (state, token) => {
		state.token = token
	},
	logout: (state) => {
		state.token = null
	},
}
