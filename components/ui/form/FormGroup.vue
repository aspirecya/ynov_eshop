<template>
	<div class="form_group">
		<label class="block text-sm font-medium text-gray-700">{{ textLabel }}</label>
		<input class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" :type="inputType" :v-model="inputModel" :name="inputModel"/>
	</div>
</template>

<script>
	export default {
		name: "FormGroup",

		props: {
			textLabel: {
				type: String
			},
			inputType: {
				type: String,
				required: true,
			},
			inputModel: {
				type: String
			}
		},
	}
</script>

<style scoped>

</style>
