import Vue from "vue"
import Router from "vue-router"
import Register from "@/views/Register.vue"
import Marketplace from "@/views/Marketplace.vue"
import Customer from "@/views/Customers.vue"
import Notifications from "@/views/Notifications.vue"
import SingleProduct from "@/views/SingleProduct.vue"
import Login from "@/views/Login.vue"
import { store } from "@/store"
import { Role } from "../helpers/Role"

Vue.use(Router)

const routes = [
	{
		path: "/marketplace",
		name: "Marketplace",
		component: Marketplace,
		meta: {
			requiresAuth: true,
			role: Role.Customer,
		},
	},
	{
		path: "/notifications",
		name: "Notifications",
		component: Notifications,
		meta: {
			requiresAuth: true,
			role: Role.Agent,
		},
	},
	{
		path: "/customers",
		name: "Customer",
		component: Customer,
		meta: {
			requiresAuth: true,
			role: Role.Agent,
		},
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/products/:id",
		name: "SingleProduct",
		component: SingleProduct,
		meta: {
			requiresAuth: true,
			role: Role.Customer,
		},
	},
	{
		path: "*",
		name: "All",
	},
]

const router = new Router({
	routes,
	mode: "history",
})

router.beforeEach((to, _from, next) => {
	if (to.meta.requiresAuth) {
		if (!store.getters.isLoggedIn) {
			return next({ name: "Login" })
		} else {
			if (to.meta.role === Role.Agent && !store.getters.isAgent) {
				return next({ name: "Marketplace" })
			}
		}
	}
	next()
})

export default router
