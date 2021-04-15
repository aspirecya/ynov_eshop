<template>
	<div class="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
		<div v-if="isLogged()">
			<div class="hidden sm:block" aria-hidden="true">
				<div class="py-5">
					<div class="border-t border-gray-200"></div>
				</div>
			</div>

			<div class="mt-10 sm:mt-0">
				<div class="md:grid md:grid-cols-3 md:gap-6">
					<div class="md:col-span-1">
						<div class="px-4 sm:px-0">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
							<p class="mt-1 text-sm text-gray-600">
								Use a permanent address where you can receive mail.
							</p>
						</div>
					</div>
					<div class="mt-5 md:mt-0 md:col-span-2">
						<form action="#" method="POST">
							<div class="shadow overflow-hidden sm:rounded-md">
								<div class="px-4 py-5 bg-white sm:p-6">
									<div class="grid grid-cols-6 gap-6">
										<div class="col-span-6 sm:col-span-3">
											<label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
											<input :value="user.firstName" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
										</div>

										<div class="col-span-6 sm:col-span-3">
											<label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
											<input :value="user.lastName" type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
										</div>

										<div class="col-span-6">
											<label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
											<input :value="user.address" type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div class="hidden sm:block" aria-hidden="true">
				<div class="py-5">
					<div class="border-t border-gray-200"></div>
				</div>
			</div>

			<div class="mt-10 sm:mt-0">
				<div class="md:grid md:grid-cols-3 md:gap-6">
					<div class="md:col-span-1">
						<div class="px-4 sm:px-0">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Order Summary</h3>
							<p class="mt-1 text-sm text-gray-600">
								Decide which communications you'd like to receive and how.
							</p>
						</div>
					</div>

					<div class="mt-5 md:mt-0 md:col-span-2">
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
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
				</div>
			</div>

<!--			<div class="hidden sm:block" aria-hidden="true">-->
<!--				<div class="py-5">-->
<!--					<div class="border-t border-gray-200"></div>-->
<!--				</div>-->
<!--			</div>-->

<!--			<div class="mt-10 sm:mt-0">-->
<!--				<div class="md:grid md:grid-cols-3 md:gap-6">-->
<!--					<div class="md:col-span-1">-->
<!--						<div class="px-4 sm:px-0">-->
<!--							<h3 class="text-lg font-medium leading-6 text-gray-900">Payment Informations</h3>-->
<!--							<p class="mt-1 text-sm text-gray-600">-->
<!--								Decide which communications you'd like to receive and how.-->
<!--							</p>-->
<!--						</div>-->
<!--					</div>-->

<!--					<div class="mt-5 md:mt-0 md:col-span-2">-->
<!--						<form action="#" method="POST">-->
<!--							<div class="shadow overflow-hidden sm:rounded-md">-->
<!--								<div class="px-4 py-5 bg-white sm:p-6">-->
<!--								</div>-->
<!--							</div>-->
<!--						</form>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->

			<div class="flex items-end justify-end mt-4 mr-4">
				<button v-on:click="order" type="button" class="inline-flex self-end items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg id="Capa_1" class="-ml-1 mr-2 h-5 w-5 fill-current" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
						<path d="m337.034 420.796c.835.139 1.665.207 2.484.207 7.2 0 13.555-5.2 14.778-12.537l15-90c1.362-8.171-4.158-15.9-12.33-17.262-8.172-1.366-15.9 4.158-17.262 12.33l-15 90c-1.362 8.172 4.158 15.901 12.33 17.262z"/><path d="m158.704 408.466c1.223 7.337 7.577 12.537 14.778 12.537.819 0 1.649-.067 2.484-.207 8.172-1.362 13.692-9.09 12.33-17.262l-15-90c-1.362-8.172-9.089-13.691-17.262-12.33-8.172 1.362-13.692 9.09-12.33 17.262z"/><path d="m497 181h-52.791l-115.496-144.37c-5.174-6.467-14.613-7.518-21.083-2.342-6.469 5.175-7.518 14.614-2.342 21.083l100.503 125.629h-299.582l100.504-125.629c5.175-6.469 4.126-15.909-2.342-21.083-6.47-5.176-15.909-4.126-21.083 2.342l-115.497 144.37h-52.791c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h18.686l56.892 199.121c1.839 6.44 7.725 10.879 14.422 10.879h302c6.697 0 12.583-4.439 14.423-10.879l56.891-199.121h18.686c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-101.314 270h-279.372l-51.428-180h382.229zm86.314-210c-51.385 0-403.32 0-452 0v-30h452z"/><path d="m256 421c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15s-15 6.716-15 15v90c0 8.285 6.716 15 15 15z"/>
					</svg>
					Passer la commande
				</button>
			</div>
		</div>
		<div v-else>
			<div>not logged</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "checkout",
	data: function () {
		return {
			user: {}
		}
	},
	beforeMount() {
		if(this.isLogged()) {
			const token = localStorage.getItem('token');
			if (token) {
				const jwtDecoded = this.$decodeJwt(token);
				this.$getMe(jwtDecoded.id, token)
					.then(data => {
						this.user = data;
					})
					.catch(err => console.log(err))
			}
		}
	},
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
		order: async function () {
			const token = localStorage.getItem('token');
			const products = this.cartProductIds();

			const body = {
				user: this.user._id,
				products: products,
				totalPrice: this.finalPrice,
				status: "in progress",
			}

			this.$makeOrder(body, token)
				.then((data) => {
					this.$store.dispatch("clearCart");
					this.$store.dispatch("addSuccess", "Order has been successfully processed.");
					this.$router.push('/eshop/');
				})
				.catch(err => {
					console.log(err)
					this.$store.dispatch("addError", err);
				})
		},
		isLogged: function () {
			if(process.browser) {
				return !!localStorage.getItem('token');
			}
		},
		removeFromCart(id) {
			this.$store.dispatch("removeItemFromCart", id);
		},
		cartProductIds() {
			let products = [];
			this.$store.getters.cart.map(item => { products.push(item.id) })
			return products;
		}
	}
}
</script>

<style scoped>

</style>
