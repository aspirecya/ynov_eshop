<template>
	<div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
		<div class="max-w-3xl mx-auto">
			<NuxtLink to="/eshop">
				<button type="button" class="inline-flex mb-4 items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<!-- Heroicon name: solid/mail -->
					<svg class="-ml-1 mr-2 h-5 w-5 fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 206.108 206.108" xml:space="preserve">
					<path d="M152.774,69.886H30.728l24.97-24.97c3.515-3.515,3.515-9.213,0-12.728c-3.516-3.516-9.213-3.515-12.729,0L2.636,72.523
						c-3.515,3.515-3.515,9.213,0,12.728l40.333,40.333c1.758,1.758,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636
						c3.515-3.515,3.515-9.213,0-12.728l-24.97-24.97h122.046c19.483,0,35.334,15.851,35.334,35.334s-15.851,35.334-35.334,35.334H78.531
						c-4.971,0-9,4.029-9,9s4.029,9,9,9h74.242c29.408,0,53.334-23.926,53.334-53.334S182.182,69.886,152.774,69.886z"
					/>
				</svg>
					Return
				</button>
			</NuxtLink>

			<div class="bg-white shadow overflow-hidden sm:rounded-lg">
				<div class="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl class="sm:divide-y sm:divide-gray-200" :v-if="product">
						<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-500">
								Product name
							</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{{ product.title }}
							</dd>
						</div>
						<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-500">
								Price
							</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{{ product.price }}€
							</dd>
						</div>
						<div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt class="text-sm font-medium text-gray-500">
								Description
							</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{{ product.description }}
							</dd>
						</div>
					</dl>

					<div class="flex items-end justify-end mb-4 mr-4">
						<button v-on:click="addToCart(product)" type="button" class="inline-flex self-end items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							<svg id="Capa_1" class="-ml-1 mr-2 h-5 w-5 fill-current" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
								<path d="m337.034 420.796c.835.139 1.665.207 2.484.207 7.2 0 13.555-5.2 14.778-12.537l15-90c1.362-8.171-4.158-15.9-12.33-17.262-8.172-1.366-15.9 4.158-17.262 12.33l-15 90c-1.362 8.172 4.158 15.901 12.33 17.262z"/><path d="m158.704 408.466c1.223 7.337 7.577 12.537 14.778 12.537.819 0 1.649-.067 2.484-.207 8.172-1.362 13.692-9.09 12.33-17.262l-15-90c-1.362-8.172-9.089-13.691-17.262-12.33-8.172 1.362-13.692 9.09-12.33 17.262z"/><path d="m497 181h-52.791l-115.496-144.37c-5.174-6.467-14.613-7.518-21.083-2.342-6.469 5.175-7.518 14.614-2.342 21.083l100.503 125.629h-299.582l100.504-125.629c5.175-6.469 4.126-15.909-2.342-21.083-6.47-5.176-15.909-4.126-21.083 2.342l-115.497 144.37h-52.791c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h18.686l56.892 199.121c1.839 6.44 7.725 10.879 14.422 10.879h302c6.697 0 12.583-4.439 14.423-10.879l56.891-199.121h18.686c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-101.314 270h-279.372l-51.428-180h382.229zm86.314-210c-51.385 0-403.32 0-452 0v-30h452z"/><path d="m256 421c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15s-15 6.716-15 15v90c0 8.285 6.716 15 15 15z"/>
							</svg>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Product from "../../apollo/queries/product.gql";
export default {
	name: "id",
	data: function() {
		return {
			product: {}
		}
	},
	methods: {
		addToCart(product) {
			this.$store.dispatch("addItemToCart", product);
			this.$store.dispatch("addSuccess", "Product added in cart.");
		}
	},
	apollo: {
		product: {
			query: Product,
			variables() {
				return {
					id: this.$route.params.id
				}
			},
			update(data) {
				console.log(data);
				return data.product;
			}
		}
	}
}
</script>

<style scoped>

</style>
