<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					Order ID {{ order._id }}
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="mt-5">
				<dl class="divide-y divide-gray-200">
					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Ordered by
						</dt>
						<dd v-if="order.user" class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ order.user.firstname }} {{ order.user.lastname }}</span>
							<span class="ml-4 flex-shrink-0">
								<NuxtLink :to="`/admin/users/${order.user._id}`">
									  <button type="button" class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
										View
									  </button>
								</NuxtLink>
							</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Time of order
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ order.createdAt | format }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Order total price
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ order.totalPrice }}€</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Order status
						</dt>
						<dd class="mt-1 flex items-center text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span v-if="!editMode" class="flex-grow">{{ order.status }}</span>
							<select v-if="editMode" v-model="status" id="location" name="location" class="w-full block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
								<option value="processed" selected>processed</option>
								<option value="on hold">on hold</option>
								<option value="cancelled">cancelled</option>
							</select>
							<span class="ml-4 flex-shrink-0">
								<button v-on:click="toggleEdit" v-if="!editMode" class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Update
								</button>

								<button v-on:click="editStatus" v-if="editMode" class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Save
						  		</button>
							</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Products ordered
						</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
								<li v-for="(product, key) in order.products" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div class="w-0 flex-1 flex items-center">
										<svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
										</svg>
										<span class="ml-2 flex-1 w-0 truncate">
											{{ product.title }}
									  	</span>
									</div>
									<div class="ml-4 flex-shrink-0 flex space-x-4">
										<NuxtLink :to="`/admin/products/${order.user._id}`">
											<button type="button" class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												View product
											</button>
										</NuxtLink>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	layout: "admin",
	name: "id",
	data: function () {
		return {
			order: [],
			editMode: false,
			status: "",
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowOrder(token, this.$route.params.id)
				.then(data => {
					this.order = data;
				})
		}
	},
	methods: {
		toggleEdit: function() {
			this.editMode = !this.editMode;
		},
		editStatus: function () {
			const token = localStorage.getItem('token');

			if(token) {
				const jwtDecoded = this.$decodeJwt(token);
				const body = {
					status: this.status
				}

				this.$editOrder(this.$route.params.id, token, body)
					.then(data => {
						this.order = data;
						this.toggleEdit();
						this.$store.dispatch("addSuccess", "Order status changed.");
					})
					.catch(err => console.log(err))
			}
		}
	},
	filters: {
		format: function(value) {
			if (value) {
				return moment(String(value)).format('DD/MM/YYYY - hh:mm')
			}
		}
	}
}
</script>

<style scoped>

</style>
