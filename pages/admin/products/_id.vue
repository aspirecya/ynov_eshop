<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					Product ID {{ product._id }}
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="flex justify-end">
				<button v-on:click="toggleEdit" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
					</svg>
					Edit product
				</button>
			</div>

			<div v-if="!editMode" class="mt-5">
				<dl class="divide-y divide-gray-200">
					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Date created
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ product.createdAt | format }}</span>
						</dd>
					</div>

					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product title
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ product.title }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product description
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ product.description }}</span>
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product price
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<span class="flex-grow">{{ product.price }}€</span>
						</dd>
					</div>

					<div v-if="product.categories && product.categories.length > 0" class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product categories
						</dt>
						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">
								<li v-for="(category, key) in product.categories" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
									<div class="w-0 flex-1 flex items-center">
										<svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
										</svg>
										<span class="ml-2 flex-1 w-0 truncate">
											{{ category }}
									  	</span>
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
							<span class="flex-grow">{{ product.createdAt | format }}</span>
						</dd>
					</div>

					<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product title
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="title" placeholder="Product title" type="text" name="title" id="title" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product description
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="description" placeholder="Product description" type="text" name="description" id="description" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

					<div class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
						<dt class="text-sm font-medium text-gray-500">
							Product price
						</dt>
						<dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							<input v-model="price" placeholder="Product price" type="number" name="price" id="price" class="flex-1 p-1 mx-1 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-black">
						</dd>
					</div>

<!--					<div v-if="product.categories && product.categories.length > 0" class="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">-->
<!--						<dt class="text-sm font-medium text-gray-500">-->
<!--							Product categories-->
<!--						</dt>-->
<!--						<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">-->
<!--							<ul class="border border-gray-200 rounded-md divide-y divide-gray-200">-->
<!--								<li v-for="(category, key) in product.categories" class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">-->
<!--									<div class="w-0 flex-1 flex items-center">-->
<!--										<svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />-->
<!--										</svg>-->
<!--										<span class="ml-2 flex-1 w-0 truncate">-->
<!--											{{ category }}-->
<!--									  	</span>-->
<!--									</div>-->
<!--								</li>-->
<!--							</ul>-->
<!--						</dd>-->
<!--					</div>-->

					<div class="pt-5">
						<div class="flex justify-end">
							<button v-on:click="toggleEdit" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Cancel
							</button>
							<button @click.prevent="editProduct" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
			product: [],
			editMode: false,
			title: "",
			description: "",
			price: "",
			categories: [],
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowProduct(token, this.$route.params.id)
				.then(data => {
					this.product = data;
				})
		}
	},
	methods: {
		toggleEdit: function() {
			this.editMode = !this.editMode;
		},
		editProduct: function() {
			const token = localStorage.getItem('token');

			if(token) {
				const jwtDecoded = this.$decodeJwt(token);
				const body = {
					title: this.title,
					description: this.description,
					price: this.price
				}

				for(let prop in body) if(!body[prop]) delete body[prop];

				this.$editProduct(this.$route.params.id, token, body)
					.then(data => {
						this.product = data;
						this.toggleEdit();
						this.$store.dispatch("addSuccess", "Product informations changed.");
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
