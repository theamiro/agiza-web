<template>
	<router-link class="text-decoration-none" :to="{ name: 'SingleProduct', params: { id: product.id } }">
		<v-card elevation="0" class="rounded-xl">
			<v-img v-if="product.image" class="rounded-xl" height="180" :src="product.image"></v-img>
			<v-img v-else class="rounded-xl" height="180" src="@/assets/placeholder.jpg"></v-img>
			<v-card-title class="pb-0">{{ product.title }}</v-card-title>
			<v-card-text class="pb-0">
				{{ product.description }}
			</v-card-text>
			<v-card-text class="d-flex justify-space-between align-baseline pb-5">
				<p class="text-h5 text--dark mb-0 font-weight-medium">{{ product.currency }} {{ product.price }}</p>
				<p class="mb-0 small font-weight-medium">{{ product.numberInStock }} in stock</p>
			</v-card-text>
		</v-card>
	</router-link>
</template>

<script>
	export default {
		name: "ProductCard",
		props: {
			product: Object,
		},
	}
</script>
