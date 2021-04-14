<template>
	<div>
		<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
			<div class="flex-1 min-w-0">
				<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
					Shop Users
				</h1>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
			<div class="flow-root mt-6">
				<ul class="-my-5 divide-y divide-gray-200">
					<li class="py-4" v-for="(user, key) in users" :key="key">
						<div class="flex items-center space-x-10">
							<div class="flex-1 min-w-0">
								<p class="flex items-center text-sm font-medium text-gray-900 truncate">
									<svg class="flex-shrink-0 mr-2 h-4 w-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
									</svg>
									{{ user.email }}
								</p>
								<p class="flex items-center text-sm text-gray-500 truncate">
									<svg class="flex-shrink-0 mr-2 h-4 w-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
									</svg>
									User ID: {{ user._id }}
								</p>
							</div>
							<div v-if="user.firstname && user.lastname" class="flex-1 min-w-0">
								<p class="flex items-center text-sm text-gray-500">
									<svg class="flex-shrink-0 mr-2 h-4 w-4 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
									</svg>
									{{ user.firstname }} {{ user.lastname }}
								</p>
							</div>

							<div>
								<button v-on:click="deleteUser(user._id)" class="inline-flex items-center shadow-sm px-3 py-1 border border-red-200 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
									Delete
								</button>

								<NuxtLink :to="`/admin/users/${user._id}`">
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
		</div>
	</div>
</template>

<script>
export default {
	layout: "admin",
	name: "dashboard",
	data: function () {
		return {
			users: []
		}
	},
	beforeMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.$adminShowUsers(token)
				.then(data => {
					this.users = data;
				})
		}
	},
	methods: {
		deleteUser: function (id) {
			const token = localStorage.getItem('token');

			if(token) {
				this.$deleteUser(id, token)
					.then(data => {
						this.$adminShowUsers(token)
							.then(data => {
								this.users = data;
							});

						this.$store.dispatch("addSuccess", "User deleted.");
					})
					.catch(err => console.log(err))
			}
		}
	}
}
</script>

<style scoped>

</style>
