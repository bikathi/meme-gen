<script setup>
	const componentProps = defineProps({
		link: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		styles: {
			type: Array,
			required: false,
		},
	});
</script>

<template>
	<router-link
		:to="{ name: link }"
		class="font-poppins bg-secondary text-base-100 p-4 rounded-full text-lg hover:cursor-pointer hover:underline underline-offset-2"
		:class="styles"
		>{{ text }}</router-link
	>
</template>
