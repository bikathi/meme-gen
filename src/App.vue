<script setup>
	import { ref } from "vue";
	import UploadIcon from "./components/UploadIcon.vue";

	const imagePreviewlink = ref("");
	const memeText = ref(
		"This is the text that appears on your meme. Click on it to edit to your own text. Color, size and fonts can be edited later in step 3"
	);

	function handleImageUpload(event) {
		const file = event.target.files[0];

		// Check if the file is an image
		if (!file.type.startsWith("image/")) {
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			imagePreviewlink.value = event.target.result;
		};
		reader.readAsDataURL(file);
	}
</script>

<template>
	<nav
		class="flex flex-col items-center justify-center py-2 border-b text-secondary-focus">
		<h1 class="font-roboto text-4xl">memetastic</h1>
		<h2 class="font-roboto text-lg">Simple VueJS Meme Maker</h2>
	</nav>
	<main class="flex space-y-2 justify-center py-2">
		<div class="w-[55%] space-y-2">
			<div class="collapse bg-base-200">
				<input
					type="radio"
					name="my-accordion-1"
					checked="checked" />
				<div class="collapse-title text-xl font-medium">
					<span class="text-secondary-focus font-roboto"
						>Step 1: Choose an Image</span
					>
				</div>
				<div class="collapse-content flex flex-col items-center">
					<form
						action="#"
						class="w-fit my-2 flex flex-col items-center">
						<h1 class="font-roboto text-xl text-secondary">
							Upload/ Change Your Meme Photo
						</h1>
						<label
							for="dropzone-file"
							class="mt-2 flex bg-base-300 hover:bg-base-300/60 flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer h-72 w-96 rounded-md">
							<div
								class="flex flex-col items-center justify-center pt-5 pb-6">
								<UploadIcon />
								<p
									class="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span class="font-semibold"
										>Click to upload</span
									>
								</p>
							</div>
							<input
								id="dropzone-file"
								type="file"
								class="hidden"
								@change="handleImageUpload" />
						</label>
					</form>
					<img
						:src="imagePreviewlink"
						alt="image-preview"
						class="rounded-lg w-56 h-56" />
				</div>
			</div>
			<div class="collapse bg-base-200">
				<input
					type="radio"
					name="my-accordion-1" />
				<div class="collapse-title text-xl font-medium">
					<span class="text-secondary-focus font-roboto"
						>Step 2: Add Your Meme Text</span
					>
				</div>
				<div class="collapse-content">
					<p
						class="outline-none text-xl font-roboto text-center text-secondary"
						contenteditable="true">
						{{ memeText }}
					</p>
				</div>
			</div>
			<div class="collapse bg-base-200">
				<input
					type="radio"
					name="my-accordion-1" />
				<div class="collapse-title text-xl font-medium">
					<span class="text-secondary-focus font-roboto"
						>Step 3: Meme Customization</span
					>
				</div>
				<div class="collapse-content">
					<p>hello</p>
				</div>
			</div>
			<div class="collapse bg-base-200">
				<input
					type="radio"
					name="my-accordion-1" />
				<div class="collapse-title text-xl font-medium">
					<span class="text-secondary-focus font-roboto"
						>Step 4: Preview and Download Meme</span
					>
				</div>
				<div class="collapse-content">
					<p>hello</p>
				</div>
			</div>
		</div>
	</main>
</template>
