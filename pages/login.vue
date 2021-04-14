<template>
	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md my-4">
<!--		<div class="rounded-md bg-red-200 p-4 mb-4" v-if="messageError">-->
<!--			<div class="flex">-->
<!--				<div class="flex-shrink-0">-->
<!--					<svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />-->
<!--					</svg>-->
<!--				</div>-->
<!--				<div class="ml-3">-->
<!--					<h3 class="text-sm font-medium text-red-800">-->
<!--						There was an error with your submission-->
<!--					</h3>-->
<!--					<div class="mt-2 text-sm text-red-700">-->
<!--						<ul class="list-disc pl-5 space-y-1">-->
<!--							<li>-->
<!--								{{ messageError }}-->
<!--							</li>-->
<!--						</ul>-->
<!--					</div>-->
<!--				</div>-->
<!--				<div class="ml-auto pl-3">-->
<!--					<div class="-mx-1.5 -my-1.5">-->
<!--						<button @click.prevent="clearMessage" class="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">-->
<!--							<span class="sr-only">Dismiss</span>-->
<!--							&lt;!&ndash; Heroicon name: solid/x &ndash;&gt;-->
<!--							<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />-->
<!--							</svg>-->
<!--						</button>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->

		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form class="space-y-6">

				<div class="form_group">
					<label class="block text-sm font-medium text-gray-700">E-mail</label>
					<input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" v-model="email" name="email"/>
				</div>

				<div class="form_group">
					<label class="block text-sm font-medium text-gray-700">Password</label>
					<input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="password" v-model="password" name="password"/>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
						<label for="remember_me" class="ml-2 block text-sm text-gray-900">
							Remember me
						</label>
					</div>

					<div class="text-sm">
						<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
							Forgot your password?
						</a>
					</div>
				</div>

				<div>
					<button type="submit" @click.prevent="login" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import AlertBox from "@/components/ui/AlertBox";

export default {
	name: "login",
	components: { AlertBox },
	data: function () {
		return {
			email: "",
			password: "",
			messageError: ""
		}
	},
	methods: {
		login: function () {
			const body = {
				email: this.email,
				password: this.password
			}
			this.$login(body)
				.then((data) => {
						if(!data.auth) {
							this.$store.dispatch("addError", data.message);
						}
						else {
							let token = data.token;
							localStorage.setItem('token',token);
							this.$store.commit('isAuth');
							this.$router.push('account');
							this.$store.dispatch("addSuccess", "You logged in.");
						}
					}
				)
				.catch(err => console.log(err))
		},
	}
}
</script>

<style scoped>

</style>
