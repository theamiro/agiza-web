<template>
	<v-container class="mt-15">
		<v-row>
			<v-col cols="12">
				<h1>Order Notifications</h1>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" v-for="notification in notifications" :key="notification.id">
				<notification-card :customerName="notification.customerName" :message="notification.message" :time="notification.time"> </notification-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import NotificationCard from "../components/NotificationCard"
	export default {
		name: "Notifications",
		components: {
			NotificationCard,
		},
		data() {
			return {
				notifications: [
					{ id: "1", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
					{ id: "2", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
					{ id: "3", customerName: "Johansen Mwajuma", message: "Order Placed a few minutes ago", time: "08:09am", date: "21 Sep 21" },
				],
			}
		},
	}
</script>
