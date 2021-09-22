import { Role } from "@/helpers/Role"

export const mockUsers = [
	{
		id: "1",
		firstName: "Agent",
		lastName: "007",
		emailAddress: "agent@agent.com",
		password: "YWdlbnQ=",
		phoneNumber: "0744464000",
		role: Role.Agent,
	},
	{
		id: "2",
		firstName: "Ugandan",
		lastName: "Customer",
		emailAddress: "uganda@mail.com",
		password: "Y3VzdG9tZXI=",
		phoneNumber: "07453562781",
		country: "Uganda",
		role: Role.Customer,
	},
	{
		id: "3",
		firstName: "Kenyan",
		lastName: "Customer",
		emailAddress: "kenya@mail.com",
		password: "Y3VzdG9tZXI=",
		phoneNumber: "07453562781",
		country: "Kenya",
		role: Role.Customer,
	},
]

export const mockProducts = [
	{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Baseball Bat", description: "Manufactured using high tensile strenght wood. this baseball bat cannot break.", currency: "KES", price: 2000, numberInStock: 3, location: ["Uganda", "Kenya"] },
	{ id: "2", image: "https://picsum.photos/500/300?image=12", title: "Picture Frame", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Kenya"] },
	{ id: "3", image: "https://picsum.photos/500/300?image=13", title: "Rayban Shades", description: "Glasses to make you look cool", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "4", image: "https://picsum.photos/500/300?image=463", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Kenya", "Uganda"] },
	{ id: "5", image: "https://picsum.photos/500/300?image=5", title: "Wooden calendar", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "6", image: "https://picsum.photos/500/300?image=5", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Kenya"] },
	{ id: "7", image: "https://picsum.photos/500/300?image=98", title: "iPhone Charger", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "8", image: "https://picsum.photos/500/300?image=32", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Uganda"] },
	{ id: "9", image: "https://picsum.photos/500/300?image=20", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "10", image: "https://picsum.photos/500/300?image=45", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Uganda", "Kenya"] },
	{ id: "11", image: "https://picsum.photos/500/300?image=7", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "12", image: "https://picsum.photos/500/300?image=32", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Uganda", "Kenya"] },
	{ id: "13", image: "https://picsum.photos/500/300?image=35", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
	{ id: "14", image: "https://picsum.photos/500/300?image=17", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Kenya"] },
	{ id: "15", image: "https://picsum.photos/500/300?image=32", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: ["Uganda"] },
	{ id: "16", image: "https://picsum.photos/500/300?image=3", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: ["Kenya"] },
]

export const mockNotifications = [
	{ id: "1", customerName: "Johansen Mwajuma", product: "iPhone Charger", time: "08:09am", date: "21 Sep 21" },
	{ id: "2", customerName: "Susan Kimani", product: "Rayban Shades", time: "08:09am", date: "21 Sep 21" },
	{ id: "3", customerName: "Billy Jean", product: "Musical Card", time: "08:09am", date: "21 Sep 21" },
]
