<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					Shop Products
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="flex justify-end mb-16">
				<button v-on:click="toggleAdd" type="button" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
					</svg>
					Create product
				</button>
			</div>

			<div v-if="!addMode" class="flow-root mt-6">
				<ul class="-my-5 divide-y divide-gray-200">
					<li class="py-4" v-for="(product, key) in products" :key="key">
						<div class="flex items-center space-x-10">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate">
									{{ product.title }}
								</p>
								<p class="text-sm text-gray-500 truncate">
									Product ID: {{ product._id }}
								</p>
							</div>
							<div class="flex-1 min-w-0">
								<p class="flex items-center text-sm text-gray-500">
									<svg class="flex-shrink-0 mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									{{ product.price }}€
								</p>
							</div>
							<div>
								<button v-on:click="deleteProduct(product._id)" class="inline-flex items-center shadow-sm px-3 py-1 border border-red-200 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
									Delete
								</button>

								<NuxtLink :to="`/admin/products/${product._id}`">
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

			<div v-if="addMode" class="flow-root mt-6">
				<dl class="divide-y divide-gray-200">
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
							<button v-on:click="toggleAdd" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Cancel
							</button>
							<button @click.prevent="createProduct" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Create
							</button>
						</div>
					</div>
				</dl>
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
			addMode: false,
			products: [],
			title: "",
			description: "",
			price: "",
			categories: [],
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowProducts(token)
				.then(data => {
					this.products = data;
				})
		}
	},
	methods: {
		toggleAdd: function () {
			this.addMode = !this.addMode;
		},
		createProduct: function () {
			const token = localStorage.getItem('token');

			if(token) {
				const body = {
					title: this.title,
					description: this.description,
					price: this.price
				}

				for(let prop in body) if(!body[prop]) delete body[prop];

				this.$makeProduct(body, token)
					.then(data => {
						this.$adminShowProducts(token)
							.then(data => {
								this.products = data;
							});

						this.toggleAdd();
						this.$store.dispatch("addSuccess", "Product created.");
					})
					.catch(err => console.log(err))
			}
		}
	}
}
</script>

<style scoped>

</style>
