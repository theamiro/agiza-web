<template>
	<v-card elevation="0" flat color="light" class="rounded-xl">
		<v-card-text class="text-center pa-15">
			{{ message }}
		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		name: "Empty State",
		props: {
			message: String,
		},
	}
</script>
