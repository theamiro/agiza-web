import "@babel/polyfill"
import "mutationobserver-shim"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { store } from "@/store"
import vuetify from "./plugins/vuetify"
var moment = require("moment")

Vue.config.productionTip = false
moment().format()
new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app")
