<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
			<Title titleText="Shop"/>

			<div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
				<div v-for="product in productsArray" :key="product.id" class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
					<div class="p-6">
						<h2 class="text-lg leading-6 font-medium text-gray-900">{{ product.title }}</h2>
						<p class="mt-4 text-sm text-gray-500">{{ product.description }}</p>
						<p class="mt-8">
							<span class="text-4xl font-extrabold text-gray-900">{{ product.price }}€</span>
						</p>
						<div class="flex space-x-4">
							<NuxtLink :to="`product/${product.id}`" class="flex items-center justify-center mt-8 block w-1/2 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-4 w-4 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
								</svg>
								Product page
							</NuxtLink>

							<button v-on:click="addToCart(product)" class="flex items-center justify-center mt-8 block w-1/2 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
								<svg id="Capa_1" class="-ml-1 mr-2 h-4 w-4 fill-current" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
									<path d="m337.034 420.796c.835.139 1.665.207 2.484.207 7.2 0 13.555-5.2 14.778-12.537l15-90c1.362-8.171-4.158-15.9-12.33-17.262-8.172-1.366-15.9 4.158-17.262 12.33l-15 90c-1.362 8.172 4.158 15.901 12.33 17.262z"/><path d="m158.704 408.466c1.223 7.337 7.577 12.537 14.778 12.537.819 0 1.649-.067 2.484-.207 8.172-1.362 13.692-9.09 12.33-17.262l-15-90c-1.362-8.172-9.089-13.691-17.262-12.33-8.172 1.362-13.692 9.09-12.33 17.262z"/><path d="m497 181h-52.791l-115.496-144.37c-5.174-6.467-14.613-7.518-21.083-2.342-6.469 5.175-7.518 14.614-2.342 21.083l100.503 125.629h-299.582l100.504-125.629c5.175-6.469 4.126-15.909-2.342-21.083-6.47-5.176-15.909-4.126-21.083 2.342l-115.497 144.37h-52.791c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h18.686l56.892 199.121c1.839 6.44 7.725 10.879 14.422 10.879h302c6.697 0 12.583-4.439 14.423-10.879l56.891-199.121h18.686c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15zm-101.314 270h-279.372l-51.428-180h382.229zm86.314-210c-51.385 0-403.32 0-452 0v-30h452z"/><path d="m256 421c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15s-15 6.716-15 15v90c0 8.285 6.716 15 15 15z"/>
								</svg>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Products from "../apollo/queries/products.gql";
import Title from "../components/ui/Title";
import AlertBox from "@/components/ui/AlertBox";

export default {
	components: {
		Title,
		AlertBox,
	},
	data: function() {
		return {
			productsArray:[],
			loading:0
		}
	},
	methods: {
		addToCart(product) {
			this.$store.dispatch("addItemToCart", product);
			this.$store.dispatch("addSuccess", "Product added in cart.");
		}
	},
	apollo : {
		$loadingKey:"loading",
		productsArray: {
			prefetch:true,
			query : Products,
			update(data) {
				console.log(data.products);
				console.log(this.loading);
				return data.products;
			}
		}
	}
}
</script>

<style scoped>

</style>
