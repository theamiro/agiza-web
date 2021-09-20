<template>
	<v-container class="mt-15">
		<v-row class="mb-15">
			<v-col cols="6">
				<v-card elevation="0" class="rounded-xl">
					<v-img class="rounded-xl" height="360" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
				</v-card>
			</v-col>
			<v-col cols="4">
				<h1 class="font-weight-bold">Product Name</h1>
				<h2>KES 2000</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar egestas aliquam enim et. Ultrices fames lectus eu sit mattis ut vel laoreet nisl. Et sapien sed adipiscing vestibulum. Malesuada mi ultrices amet nulla ut. Eu aliquet aliquam viverra aliquam vel faucibus. Tempus
					morbi eu lectus ultrices ultrices. Nisi, nunc odio dolor bibendum.
				</p>
				<p class="font-weight-medium text--secondary">Available in your country</p>
				<v-text-field class="text-center"></v-text-field>
				<v-btn color="primary" large elevation="0">Place your Order</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				<h1 class="mb-5">Related Products</h1>
				<hr />
			</v-col>
			<v-col xl="2" lg="3" md="4" sm="6" v-for="upseller in upsellers" :key="upseller.id">
				<product-card :product="upseller"></product-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	import ProductCard from "../components/ProductCard.vue"
	export default {
		name: "SingleProduct",
		components: {
			ProductCard,
		},
		data() {
			return {
				product: {},
				upsellers: [
					{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
					{ id: "2", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
					{ id: "3", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
					{ id: "4", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
				],
			}
		},
	}
</script>
