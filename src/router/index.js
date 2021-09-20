import Vue from "vue"
import VueRouter from "vue-router"
import Marketplace from "../views/Marketplace.vue"
import Notifications from "../views/Notifications.vue"
import SingleProduct from "../views/SingleProduct.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Marketplace",
		component: Marketplace,
	},
	{
		path: "/notifications",
		name: Notifications,
		component: () => import("../views/Notifications.vue"),
	},
	{
		path: "/add-customer",
		name: "Add Customer",
		component: () => import("../views/AddCustomer.vue"),
	},
	{
		path: "/product/:id",
		name: SingleProduct,
		component: () => import("../views/SingleProduct.vue"),
	},
]

const router = new VueRouter({
	routes,
})

export default router
