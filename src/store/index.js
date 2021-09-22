import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

import { actions } from "./actions"
import { state } from "./state"
import { getters } from "./getters"
import { mutations } from "./mutations"

Vue.use(Vuex)

export const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	plugins: [
		createPersistedState({
			key: "vuex",
			reducer: (state) => (!state.token ? {} : state),
		}),
	],
})
