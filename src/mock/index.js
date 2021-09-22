import { Role } from "@/helpers/Role"

export const mockUsers = [
	{
		id: "1",
		firstName: "Agent",
		lastName: "007",
		emailAddress: "agent@agent.com",
		password: "YWdlbnQ=",
		phoneNumber: "0744464000",
		country: "Kenya",
		role: Role.Agent,
	},
	{
		id: "2",
		firstName: "Customer",
		lastName: "Custom",
		emailAddress: "customer@customer.com",
		password: "Y3VzdG9tZXI=",
		phoneNumber: "07453562781",
		country: "Kenya",
		role: Role.Customer,
	},
]

export const mockProducts = [
	{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "2", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "3", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "4", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "5", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "6", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "7", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "8", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "9", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "10", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "11", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "12", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "13", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "14", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
	{ id: "15", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "16", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
]

export const mockNotifications = [
	{ id: "1", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
	{ id: "2", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
	{ id: "3", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
]
