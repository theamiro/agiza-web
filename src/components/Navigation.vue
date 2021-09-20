<template>
	<v-app-bar app elevation="0" color="white" light>
		<v-container class="px-15">
			<v-row>
				<v-col class="d-flex justify-space-between">
					<div class="d-flex align-center">
						<a href="/"><h2>Agiza</h2></a>
					</div>

					<div class="d-flex">
						<v-btn to="/add-customer" elevation="0" class="ml-3">Customer</v-btn>
						<v-btn to="/notifications" elevation="0" class="ml-3">Notifications</v-btn>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
</template>
<script>
	export default {
		name: "Navigation",
	}
</script>
