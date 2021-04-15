<template>
	<nav class="bg-white shadow border-b border-gray-200">
		<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			<div class="relative flex justify-between h-16">
				<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex-shrink-0 flex items-center">
						<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
						<img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
					</div>
					<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
						<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
						<NuxtLink to="/eshop" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Shop
						</NuxtLink>

						<NuxtLink to="/register" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Register
						</NuxtLink>

						<NuxtLink to="/login" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Login
						</NuxtLink>

						<NuxtLink to="/account" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Account
						</NuxtLink>

						<NuxtLink to="/about" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							About
						</NuxtLink>

						<NuxtLink to="/cart" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Cart  <span v-if="totalItems > 0" class="ml-1">({{ totalItems }})</span>
						</NuxtLink>

						<NuxtLink to="/admin/dashboard" class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
							Admin
						</NuxtLink>

						<button class="text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none inline-flex items-center px-1 pt-1 text-sm font-medium">
							Logout
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
	computed: {
		auth() {
			return this.$store.state.auth;
		},
		totalItems() {
			return this.$store.getters.totalItems;
		},
	},
	methods: {
		logout: function() {
			localStorage.removeItem('token');
			this.$store.commit('loggedOut');
			this.$store.dispatch('clearCart');
			this.$store.dispatch("addSuccess", "You logged out.");
			this.$router.push('login');
			this.reloadNavigation();
		},
		isLogged: function () {
			if(process.browser) {
				return !!localStorage.getItem('token');
			}
		},
		isAdmin: function () {
			if(process.browser) {
				let token = localStorage.getItem('token');
				if(token) {
					const jwtDecoded = this.$decodeJwt(token);
					return !!jwtDecoded.admin;
				}
			}
		},
		reloadNavigation: function() {
			this.$forceUpdate();
		}
	},
	watch: {
		auth(oldVal, newVal) {
			this.$forceUpdate();
		}
	}
}
</script>

<style scoped>
	.nuxt-link-active {
		@apply border-indigo-500 text-gray-900;
	}
</style>
