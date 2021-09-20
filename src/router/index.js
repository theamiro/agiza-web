import Vue from "vue"
import VueRouter from "vue-router"
import Register from "../views/Register.vue"
import Marketplace from "../views/Marketplace.vue"
import AddCustomer from "../views/AddCustomer.vue"
import Notifications from "../views/Notifications.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Login from "../views/Login.vue"
import { state } from "../store/state"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Marketplace",
		component: Marketplace,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: Notifications,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/add-customer",
		name: "AddCustomer",
		component: AddCustomer,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/products/:id",
		name: "SingleProduct",
		component: SingleProduct,
		meta: {
			requiresAuth: true,
		},
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, _from, next) => {
	if (to.meta.requiresAuth) {
		if (!state.getters.isLoggedIn) {
			next({ name: "Login" })
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router
