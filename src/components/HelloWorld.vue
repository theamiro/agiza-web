<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<v-text-field dense rounded filled class="rounded-lg" v-model="firstName" label="Search" required> </v-text-field>
			</v-col>
		</v-row>
		<v-row>
			<v-col> </v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		name: "HelloWorld",
		data() {
			return {}
		},
	}
</script>
