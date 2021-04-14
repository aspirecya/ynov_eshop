<template>
	<div class="sm:flex sm:flex-col sm:align-center">
		<h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">{{ titleText }}</h1>
		<p v-if="titleDesc" class="mt-5 text-xl text-gray-500 sm:text-center">{{ titleDesc }}</p>
	</div>
</template>

<script>
export default {
	name: "Title",
	props : {
		titleText: {
			type: String,
			required: true
		},
		titleDesc: {
			type: String,
		}
	}
}
</script>

<style scoped>

</style>
