<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					User ID {{ user._id }}
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="flex justify-end">
				<button v-on:click="toggleEdit" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
					</svg>
					Edit user
				</button>
			</div>

			<div v-if="!editMode" class="mt-5">
				<dl class="divide-y divide-gray-200">
					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Date created
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.createdAt | format }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Admin account?
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.admin }}</span>
						</dd>
					</div>

					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User e-mail
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.email }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Firstname lastname
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.firstname }} {{ user.lastname }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User address
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.address }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User phone
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.phone }}</span>
						</dd>
					</div>

					<div v-if="orders.length > 0"
						 class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User orders
						</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
								<li v-for="(order, key) in orders" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div class="w-0 flex-1 flex items-center">
										<svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
										</svg>
										<span class="ml-2 flex-1 w-0 truncate">
											{{ order.products.length }} products ordered for {{ order.totalPrice }}€
									  	</span>
									</div>
									<div class="ml-4 flex-shrink-0 flex space-x-4">
										<NuxtLink :to="`/admin/orders/${order._id}`">
											<button type="button"
													class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
												View order
											</button>
										</NuxtLink>
									</div>
								</li>
							</ul>
						</dd>
					</div>
				</dl>
			</div>

			<div v-if="editMode" class="mt-5">
				<dl class="divide-y divide-gray-200">
					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Date created
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ user.createdAt | format }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Admin account?
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<select v-model="admin" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
								<option value="true">Admin</option>
								<option value="false">Non admin</option>
							</select>
						</dd>
					</div>

					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User e-mail
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="email" placeholder="Email" type="text" name="email" id="email" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Firstname lastname
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="firstname" placeholder="Firstname" type="text" name="firstname" id="firstname" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
							<input v-model="lastname" placeholder="Lastname" type="text" name="lastname" id="lastname" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User address
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="address" placeholder="Address" type="text" name="address" id="address" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							User phone
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="phone" placeholder="Phone" type="text" name="phone" id="phone" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="pt-5">
						<div class="flex justify-end">
							<button v-on:click="toggleEdit" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Cancel
							</button>
							<button @click.prevent="editUser" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Save
							</button>
						</div>
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
			editMode: false,
			user: [],
			orders: [],
			email: "",
			firstname: "",
			lastname: "",
			address: "",
			phone: "",
			admin: "",
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowUser(token, this.$route.params.id)
				.then(data => {
					this.user = data;
				})

			this.$getUserOrders(this.$route.params.id, token)
				.then(data => {
					this.orders = data;
				})
		}
	},
	methods: {
		toggleEdit: function() {
			this.editMode = !this.editMode;
		},
		editUser: function () {
			const token = localStorage.getItem('token');

			if(token) {
				const jwtDecoded = this.$decodeJwt(token);
				const body = {
					admin: this.admin,
					email: this.email,
					firstname: this.firstname,
					lastname: this.lastname,
					phone: this.phone,
					address: this.address
				}

				for(let prop in body) if(!body[prop]) delete body[prop];

				this.$editUser(this.$route.params.id, token, body)
					.then(data => {
						this.user = data;
						this.toggleEdit();
						this.$store.dispatch("addSuccess", "User informations changed.");
					})
					.catch(err => console.log(err))
			}
		}
	},
	filters: {
		format: function (value) {
			if (value) {
				return moment(String(value)).format('DD/MM/YYYY - hh:mm')
			}
		}
	}
}
</script>

<style scoped>

</style>
