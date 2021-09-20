<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field dense rounded filled class="rounded-lg" v-model="searchTerm" label="Search" required> </v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="3" v-for="product in products" :key="product.id">
				<product-card :product="product"></product-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import ProductCard from "../components/ProductCard.vue"
	export default {
		name: "Marketplace",
		components: {
			ProductCard,
		},
		data() {
			return {
				searchTerm: "",
				products: [
					{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
					{ id: "2", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
				],
			}
		},
	}
</script>
