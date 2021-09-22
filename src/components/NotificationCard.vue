<template>
	<v-card elevation="0" class="rounded-lg">
		<v-card-text>
			<v-row class="mx-0 justify-space-between align-center">
				<div>
					<v-card-title class="text--dark">
						<h3 class="mb-3 font-weight-bold">{{ customerName }}</h3>
					</v-card-title>

					<v-card-subtitle>
						<p class="mb-0 lead">
							Placed an order for the <strong>{{ product }}</strong> on {{ date }} at {{ time }}.
						</p>
						<p class="mb-0">
							<i>Sent on {{ date }} at {{ time }}.</i>
						</p>
					</v-card-subtitle>
				</div>
				<v-btn color="primary" elevation="0">View Order</v-btn>
			</v-row>
		</v-card-text>
	</v-card>
</template>
<script>
	export default {
		name: "NotificationCard",
		props: {
			id: String,
			customerName: String,
			product: String,
			time: String,
			date: String,
		},
	}
</script>
