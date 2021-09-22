<template>
	<v-container class="">
		<v-row>
			<v-col cols="12">
				<h1>Marketplace</h1>
			</v-col>
		</v-row>
		<v-row v-if="products.length">
			<v-col xl="2" lg="3" md="4" sm="6" v-for="product in products" :key="product.id">
				<product-card :product="product"></product-card>
			</v-col>
		</v-row>
		<v-row v-else>
			<v-col cols="12" class="text-center">
				<h2>Hey, Seems like there aren't any products at the moment. Weird. Check back soon.</h2>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapActions, mapState } from "vuex"
	import ProductCard from "../components/ProductCard.vue"
	export default {
		name: "Marketplace",
		components: {
			ProductCard,
		},
		data() {
			return {}
		},
		created() {
			this.fetchProducts()
		},
		methods: {
			...mapActions(["fetchProducts"]),
		},
		computed: {
			...mapState(["products"]),
		},
	}
</script>
