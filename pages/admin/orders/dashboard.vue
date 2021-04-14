<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					Shop Orders
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="flow-root mt-6">
				<ul class="-my-5 divide-y divide-gray-200">
					<li class="py-4" v-for="(order, key) in orders" :key="key">
						<div class="flex items-center space-x-10">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate">
									Order by {{ order.user.firstname }} {{ order.user.lastname }} - {{ order.user.email }}
								</p>
								<p class="text-sm text-gray-500 truncate">
									Order ID: {{ order._id }}
								</p>
							</div>
							<div class="flex-1 min-w-0">
								<p v-if="order.status === 'processed'" class="flex items-center text-sm text-gray-500">
									<!-- Heroicon name: solid/check-circle -->
									<svg class="flex-shrink-0 mr-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									Processed order
								</p>
								<p v-else-if="order.status === 'on hold'" class="flex items-center text-sm text-gray-500">
									<svg class="flex-shrink-0 mr-2 h-5 w-5 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Order on hold
								</p>
								<p v-else-if="order.status === 'cancelled'" class="flex items-center text-sm text-gray-500">
									<svg class="flex-shrink-0 mr-2 h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Order cancelled
								</p>
								<p v-else class="flex items-center text-sm text-gray-500">
									<svg class="flex-shrink-0 mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									Order status unknown
								</p>
							</div>
							<div>
								<button v-on:click="deleteOrder(order._id)" class="inline-flex items-center shadow-sm px-3 py-1 border border-red-200 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
									Delete
								</button>

								<NuxtLink :to="`/admin/orders/${order._id}`">
									<button class="inline-flex items-center shadow-sm px-3 py-1 border border-green-200 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
										View
									</button>
								</NuxtLink>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: "admin",
	name: "dashboard",
	data: function () {
		return {
			orders: []
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowOrders(token)
				.then(data => {
					this.orders = data;
				})
		}
	},
	methods: {
		deleteOrder: function (id) {
			const token = localStorage.getItem('token');

			if(token) {
				this.$deleteOrder(id, token)
					.then(data => {
						this.$adminShowOrders(token)
							.then(data => {
								this.orders = data;
							});

						this.$store.dispatch("addSuccess", "Order deleted.");
					})
					.catch(err => console.log(err))
			}
		}
	}
}
</script>

<style scoped>

</style>
