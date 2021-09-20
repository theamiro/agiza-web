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
}
