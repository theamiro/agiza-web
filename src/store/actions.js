import router from "@/router"
import * as mutations from "./mutation-types"

export const actions = {
	login: ({ commit }, user) => {
		commit(mutations.setToken, user)
		router.push("/marketplace")
	},
}
