<template>
	<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<div class="flex flex-col">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Product
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Quantity
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Price
									</th>
									<th scope="col" class="relative px-6 py-3">
										<span class="sr-only">Remove</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="(item, index) in cart" :key="index">
									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{{ item.title }}
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										1
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{{ item.price }}€
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
										<button v-on:click="removeFromCart(item.id)" class="text-indigo-600 hover:text-indigo-900">Remove</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div class="mt-8 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-0 sm:px-6 lg:px-8">
					<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table class="min-w-full">
							<thead class="bg-gray-50 border-b border-gray-200">
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Total price
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Shipping costs
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Final price
									</th>
								</tr>
							</thead>

							<tbody class="bg-white">
								<tr>
									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										{{ itemsPrice }}€
									</td>
									<td v-if="totalItems > 0" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										10€
									</td>
									<td v-else class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										0€
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{{ finalPrice }}€
									</td>
								</tr>
							</tbody>

							<NuxtLink to="/checkout" v-if="totalItems > 0">
								<button type="button" class="mb-4 ml-4 mt-4 inline-flex self-end items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									<svg id="Capa_1" class="-ml-1 mr-2 h-5 w-5 fill-current" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
										<path d="m337.034 420.796c.835.139 1.665.207 2.484.207 7.2 0 13.555-5.2 14.778-12.537l15-90c1.362-8.171-4.158-15.9-12.33-17.262-8.172-1.366-15.9 4.158-17.262 12.33l-15 90c-1.362 8.172 4.158 15.901 12.33 17.262z"/><path d="m158.704 408.466c1.223 7.337 7.577 12.537 14.778 12.537.819 0 1.649-.067 2.484-.207 8.172-1.362 13.692-9.09 12.33-17.262l-15-90c-1.362-8.172-9.089-13.691-17.262-12.33-8.172 1.362-13.692 9.09-12.33 17.262z"/><path d="m497 181h-52.791l-115.496-144.37c-5.174-6.467-14.613-7.518-21.083-2.342-6.469 5.175-7.518 14.614-2.342 21.083l100.503 125.629h-299.582l100.504-125.629c5.175-6.469 4.126-15.909-2.342-21.083-6.47-5.176-15.909-4.126-21.083 2.342l-115.497 144.37h-52.791c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h18.686l56.892 199.121c1.839 6.44 7.725 10.879 14.422 10.879h302c6.697 0 12.583-4.439 14.423-10.879l56.891-199.121h18.686c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-101.314 270h-279.372l-51.428-180h382.229zm86.314-210c-51.385 0-403.32 0-452 0v-30h452z"/><path d="m256 421c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15s-15 6.716-15 15v90c0 8.285 6.716 15 15 15z"/>
									</svg>
									Passer la commande
								</button>
							</NuxtLink>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cart",
	computed: {
		cart() {
			return this.$store.getters.cart;
		},
		totalItems() {
			return this.$store.getters.totalItems;
		},
		itemsPrice() {
			return this.$store.getters.price;
		},
		finalPrice() {
			return this.$store.getters.price + this.$store.getters.shippingCost;
		}
	},

	methods: {
		removeFromCart(id) {
			this.$store.dispatch("removeItemFromCart", id);
		},

	}
}
</script>

<style scoped>

</style>
