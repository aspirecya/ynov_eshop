<template>
	<div >
		<Navigation />
		<div v-if="isAdmin()" class="h-screen flex overflow-hidden bg-white">
			<!-- Static sidebar for desktop -->
			<div class="hidden lg:flex lg:flex-shrink-0">
				<div class="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
					<!-- Sidebar component, swap this element with another sidebar if you like -->
					<div class="h-0 flex-1 flex flex-col overflow-y-auto">
						<!-- Navigation -->
						<nav class="px-3 mt-6">
							<div class="space-y-1">
								<div class="max-w-2xl mx-auto py-4">
									<AlertBox></AlertBox>
								</div>


								<NuxtLink to="/eshop" class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
									<svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
									</svg>
									Exit admin dashboard
								</NuxtLink>


								<NuxtLink to="/admin/orders/dashboard" class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
									<!--
									  Heroicon name: outline/home

									  Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
									-->
									<svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
									Orders
								</NuxtLink>

								<NuxtLink to="/admin/products/dashboard" class="text-gray-700 hover:text-gray-900 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
									<!-- Heroicon name: outline/view-list -->
									<svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
									</svg>
									Products
								</NuxtLink>

								<NuxtLink to="/admin/users/dashboard" class="text-gray-700 hover:text-gray-900 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
									<svg class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
									Users
								</NuxtLink>
							</div>
<!--							<div class="mt-8">-->
<!--								&lt;!&ndash; Secondary navigation &ndash;&gt;-->
<!--								<h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="teams-headline">-->
<!--									Teams-->
<!--								</h3>-->
<!--								<div class="mt-1 space-y-1" role="group" aria-labelledby="teams-headline">-->
<!--									<a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200">-->
<!--										<span class="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"></span>-->
<!--										<span class="truncate">-->
<!--                  Engineering-->
<!--                </span>-->
<!--									</a>-->

<!--									<a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200">-->
<!--										<span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>-->
<!--										<span class="truncate">-->
<!--                  Human Resources-->
<!--                </span>-->
<!--									</a>-->

<!--									<a href="#" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200">-->
<!--										<span class="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"></span>-->
<!--										<span class="truncate">-->
<!--                  Customer Success-->
<!--                </span>-->
<!--									</a>-->
<!--								</div>-->
<!--							</div>-->
						</nav>
					</div>
				</div>
			</div>
			<!-- Main column -->
			<div class="flex flex-col w-0 flex-1 overflow-hidden">
				<main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
					<Nuxt />
				</main>
			</div>
		</div>

		<div v-else class="py-4">
			<Title title-text="401 - Access forbidden."></Title>
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from "../components/ui/Footer";
import Navigation from "../components/ui/Navigation";
import Title from "@/components/ui/Title";
import AlertBox from "@/components/ui/AlertBox";

export default {
	name: "admin",
	components: {AlertBox, Title, Footer, Navigation },
	methods: {
		isAdmin: function () {
			if(process.browser) {
				let token = localStorage.getItem('token');
				if(token) {
					const jwtDecoded = this.$decodeJwt(token);
					return !!jwtDecoded.admin;
				}
			}
		},
	}
}
</script>

<style scoped lang="scss">
	.nuxt-link-active {
		@apply bg-gray-200 text-gray-900;

		svg {
			@apply text-gray-500;
		}
	}
</style>
