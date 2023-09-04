<script setup>
	const componentsProps = defineProps({
		title: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<div class="w-full h-full flex space-y-2 flex-col place-content-center">
		<h1 class="font-roboto text-5xl">{{ title }}</h1>
		<p class="font-poppins text-xl">{{ message }}</p>
	</div>
</template>
