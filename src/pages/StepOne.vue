<script setup lang="js">
	import { ref } from "vue";
	import data from "../data/steps-info";

	const imagePreviewlink = ref("");
	function handleImageUpload(event) {
		const file = event.target.files[0];
	    console.log("files: " + JSON.stringify(event.target.files));

		// Check if the file is an image
		if (!file.type.startsWith("image/")) {
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			imagePreviewlink.value = event.target.result;
		};
		reader.readAsDataURL(file);

		console.log(`Image url: ${imagePreviewlink.value}`);
	}
</script>

<template>
	<div class="flex space-x-2 h-screen p-2">
		<div class="w-1/2">
			<StepInfo
				:title="data[0].title"
				:message="data[0].description" />
		</div>
		<div class="grid grid-cols-1 place-items-center w-1/2">
			<form
				action="#"
				class="w-[65%] rounded-md border p-2 flex flex-col justify-center items-center">
				<h1 class="font-roboto text-xl">Upload Your Meme Photo</h1>
				<label
					for="dropzone-file"
					class="mt-2 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 h-72 w-96">
					<div
						class="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							aria-hidden="true"
							class="w-10 h-10 mb-3 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
						</svg>
						<p
							class="mb-2 text-sm text-gray-500 dark:text-gray-400">
							<span class="font-semibold">Click to upload</span>
						</p>
					</div>
					<input
						id="dropzone-file"
						type="file"
						class="hidden"
						@change="handleImageUpload" />
				</label>
				<div></div>
			</form>
			<img
				:src="imagePreviewlink"
				alt="Alt Text" />
			<PageLink
				link="step-two"
				text="Proceed" />
		</div>
	</div>
</template>
