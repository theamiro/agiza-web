import Vue from "vue"
import VueRouter from "vue-router"
import Register from "@/views/Register.vue"
import Marketplace from "@/views/Marketplace.vue"
import Customer from "@/views/Customers.vue"
import Notifications from "@/views/Notifications.vue"
import SingleProduct from "@/views/SingleProduct.vue"
import Login from "@/views/Login.vue"
import { store } from "@/store"
import { Role } from "../helpers/Role"

Vue.use(VueRouter)

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
]

const router = new VueRouter({
	routes,
	mode: "history",
})

router.beforeEach((to, _from, next) => {
	if (to.meta.requiresAuth) {
		if (!store.getters.isLoggedIn) {
			next({ name: "Login" })
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router
