<template>
	<v-container class="">
		<v-row>
			<v-col cols="12">
				<h1>Order Notifications</h1>
			</v-col>
		</v-row>
		<v-row v-if="notifications.length">
			<v-col cols="12" v-for="notification in notifications" :key="notification.id">
				<notification-card :customerName="notification.customerName" :message="notification.message" :time="notification.time"> </notification-card>
			</v-col>
		</v-row>
		<v-row v-else>
			<v-col cols="12">
				<h2>Seems there aren't any notifications yet. Give it a bit more time.</h2>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapActions, mapState } from "vuex"
	import NotificationCard from "../components/NotificationCard"
	export default {
		name: "Notifications",
		components: {
			NotificationCard,
		},
		data() {
			return {}
		},
		created() {
			this.fetchNotifications()
		},
		methods: {
			...mapActions(["fetchNotifications"]),
		},
		computed: {
			...mapState(["notifications"]),
		},
	}
</script>
