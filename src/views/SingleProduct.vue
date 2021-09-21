<template>
	<v-container class="mt-15">
		<v-row class="mb-15">
			<v-col lg="4" md="6" sm="12">
				<v-card elevation="0" class="rounded-xl" width="450">
					<v-img v-if="product.image" class="rounded-xl" width="450" height="450" :src="product.image"></v-img>
					<v-img v-else class="rounded-xl" width="450" height="450" src="@/assets/placeholder.jpg"></v-img>
				</v-card>
			</v-col>
			<v-col lg="8" md="6" sm="12">
				<h1 class="font-weight-bold">{{ product.title }}</h1>
				<h2>{{ product.currency }} {{ product.price }}</h2>
				<p>
					{{ product.description }}
				</p>
				<p class="text--secondary">
					<small>{{ product.numberInStock }} in stock</small>
				</p>
				<v-text-field class="text-center" placeholder="1" v-model="quantity"></v-text-field>
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
	import { mapState, mapActions } from "vuex"
	import ProductCard from "../components/ProductCard.vue"
	export default {
		name: "SingleProduct",
		components: {
			ProductCard,
		},
		data() {
			return {
				quantity: "",
				upsellers: [
					{ id: "1", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
					{ id: "2", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
					{ id: "3", image: "https://cdn.vuetifyjs.com/images/cards/cooking.png", title: "Dynamic Rayshield", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 2000, numberInStock: 200, location: "" },
					{ id: "4", image: "", title: "Musical Card", description: "Lorem ipsum dolor sit amet", currency: "KES", price: 200, numberInStock: 20, location: "" },
				],
			}
		},
		created() {
			this.fetchProductByID(this.$route.params.id)
		},
		methods: {
			...mapActions(["fetchProductByID"]),
		},
		computed: {
			...mapState(["product"]),
		},
	}
</script>
