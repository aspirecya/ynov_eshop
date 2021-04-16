<template>
	<div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<Title class="mb-4" titleText="Account"/>

		<div class="max-w-3xl mx-auto">
			<div class="flex justify-end">
				<button v-on:click="toggleEdit" type="button" class="inline-flex mb-4 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
					</svg>
					Edit my informations
				</button>
			</div>

			<div v-if="!editMode" class="bg-white shadow overflow-hidden sm:rounded-lg">
				<div class="border-t border-gray-200 px-4 py-6 sm:px-6">
					<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								Email address
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.email }}
							</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								Admin
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.admin }}
							</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								First name
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.firstname }}
							</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								Last name
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.lastname }}
							</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								Phone number
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.phone }}
							</dd>
						</div>
						<div class="sm:col-span-1">
							<dt class="text-sm font-medium text-gray-500">
								Address
							</dt>
							<dd class="mt-1 text-sm text-gray-900">
								{{ user.address }}
							</dd>
						</div>
					</dl>
				</div>
			</div>

			<div v-if="editMode" class="bg-white shadow overflow-hidden sm:rounded-lg p-8">
				<form class="space-y-8 divide-y divide-gray-200">
					<div class="space-y-8 divide-y divide-gray-200">
						<div>
							<div>
								<h3 class="text-lg leading-6 font-medium text-gray-900">
									Account informations
								</h3>
							</div>

							<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div class="sm:col-span-3">
									<label for="email" class="block text-sm font-medium text-gray-700">
										E-mail <span class="text-red-700 font-black">*</span>
									</label>
									<div class="mt-1 flex rounded-md shadow-sm">
										<input v-model="email" type="text" name="email" id="email" autocomplete="email" class="flex-1 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-black">
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="password" class="block text-sm font-medium text-gray-700">
										Password <span class="text-red-700 font-black">*</span>
									</label>
									<div class="mt-1 flex rounded-md shadow-sm">
										<input v-model="password" type="password" name="password" id="password" autocomplete="password" class="flex-1 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-black">
									</div>
								</div>
							</div>
						</div>

						<div class="pt-8">
							<div>
								<h3 class="text-lg leading-6 font-medium text-gray-900">
									Personal Information
								</h3>
							</div>
							<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
								<div class="sm:col-span-3">
									<label for="first_name" class="block text-sm font-medium text-gray-700">
										First name <span class="text-red-700 font-black">*</span>
									</label>
									<div class="mt-1">
										<input v-model="firstname" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="last_name" class="block text-sm font-medium text-gray-700">
										Last name <span class="text-red-700 font-black">*</span>
									</label>
									<div class="mt-1">
										<input v-model="lastname" type="text" name="last_name" id="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="phone_number" class="block text-sm font-medium text-gray-700">
										Phone number
									</label>
									<div class="mt-1">
										<input v-model="phone" type="tel" name="phone_number" id="phone_number" autocomplete="phone_number" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
									</div>
								</div>

								<div class="sm:col-span-6">
									<label for="street_address" class="block text-sm font-medium text-gray-700">
										Street address
									</label>
									<div class="mt-1">
										<input v-model="address" type="text" name="street_address" id="street_address" autocomplete="street-address" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
									</div>
								</div>
							</div>
						</div>
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
				</form>
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
							<h3 class="text-lg font-medium leading-6 text-gray-900">Order history</h3>
							<p class="mt-1 text-sm text-gray-600">
								Use a permanent address where you can receive mail.
							</p>
						</div>
					</div>
					<div class="mt-5 md:mt-0 md:col-span-2">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Product
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Total price
									</th>
									<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
										Order status
									</th>
								</tr>
							</thead>

							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="(order, index) in orders" :key="index">
									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
										<ul>
											<li v-for="(product, key) in order.products" :key="key">
												{{ product.title }}
											</li>
										</ul>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<p class="flex items-center text-sm text-gray-500">
											<svg class="flex-shrink-0 mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											{{ order.totalPrice }}€
										</p>
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import Title from "../components/ui/Title";

export default {
	name: "account",
	components: {
		Title
	},
	data: function () {
		return {
			editMode: false,
			isLogged: false,
			user: {},
			orders: [],

			email: "",
			password: "",
			firstname: "",
			lastname: "",
			phone: "",
			address: "",
		}
	},
	methods: {
		toggleEdit: function() {
			this.editMode = !this.editMode;
		},
		editUser: function() {
			const token = localStorage.getItem('token');

			if(token) {
				const jwtDecoded = this.$decodeJwt(token);
				const body = {
					email: this.email,
					password: this.password,
					firstname: this.firstname,
					lastname: this.lastname,
					phone: this.phone,
					address: this.address
				}

				for(let prop in body) if(!body[prop]) delete body[prop];

				this.$editUser(jwtDecoded.id, token, body)
					.then(data => {
						this.user = data;
						this.toggleEdit();
						this.$store.dispatch("addSuccess", "Account informations changed.");
					})
					.catch(err => console.log(err))
			}
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			const jwtDecoded = this.$decodeJwt(token);
			this.$getMe(jwtDecoded.id, token)
				.then(data => {
					this.isLogged = true;
					this.user = data;
				})
				.catch(err => console.log(err))

			this.$getUserOrders(jwtDecoded.id, token)
				.then(data => {
					this.orders = data;
				})
		}
	}

}
</script>

<style scoped>

</style>
