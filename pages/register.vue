<template>
	<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto">
			<div class="rounded-md bg-red-200 p-4 mb-4" v-if="messageError">
				<div class="flex">
					<div class="flex-shrink-0">
						<svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
						</svg>
					</div>
					<div class="ml-3">
						<h3 class="text-sm font-medium text-red-800">
							There was an error with your submission
						</h3>
						<div  class="mt-2 text-sm text-red-700">
							<ul class="list-disc pl-5 space-y-1">
								<li>
									{{ messageError }}
								</li>
							</ul>
						</div>
					</div>
					<div class="ml-auto pl-3">
						<div class="-mx-1.5 -my-1.5">
							<button @click.prevent="clearMessage" class="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
								<span class="sr-only">Dismiss</span>
								<!-- Heroicon name: solid/x -->
								<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

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
									<input v-model="firstName" type="text" name="first_name" id="first_name" autocomplete="given-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
								</div>
							</div>

							<div class="sm:col-span-3">
								<label for="last_name" class="block text-sm font-medium text-gray-700">
									Last name <span class="text-red-700 font-black">*</span>
								</label>
								<div class="mt-1">
									<input v-model="lastName" type="text" name="last_name" id="last_name" autocomplete="family-name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
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
						<button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Cancel
						</button>
						<button @click.prevent="register" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import FormGroup from "~/components/ui/form/FormGroup";
export default {

	name: "register",
	components: { FormGroup },
	data: function () {
		return {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			phone: "",
			address: "",
			messageError: ""
		}
	},

	methods: {
		register: function () {
			const body = {
				email: this.email,
				password: this.password,
				firstname: this.firstName,
				lastname: this.lastName,
				phone: this.phone,
				address: this.address
			}

			this.$register(body)
				.then((data) => {
					if (!data.auth) {
						this.messageError = data.details[0].message;
					}
					else {
						let token = data.token;
						localStorage.setItem('token', token);
						this.$store.commit('isAuth');
						this.$router.push('account');
					}
				})
				.catch(err => console.log(err))
		},
		clearMessage: function() {
			this.messageError = "";
		}
	}
}
</script>

<style scoped>

</style>
