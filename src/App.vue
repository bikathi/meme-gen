<script setup>
	import { reactive, ref } from "vue";
	import UploadIcon from "./components/UploadIcon.vue";

	const imagePreviewlink = ref("");
	const memeText = ref(
		"This is the text that appears on your meme. Click on it to edit to your own text. Color, size and fonts can be edited later in step 3"
	);
	const contextMenuX = ref(0);
	const contextMenuY = ref(0);
	const showContextMenu = ref(false);
	const memeTextStyles = reactive({
		fontColor: "",
		fontSize: "",
		fontFace: "",
	});

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

	function openContextMenu(event) {
		contextMenuX.value = event.clientX;
		contextMenuY.value = event.clientY;
		showContextMenu.value = true;
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
				<div class="collapse-content relative">
					<p
						class="outline-none font-roboto text-center text-secondary"
						:class="{
							[memeTextStyles.fontColor]: true,
							[memeTextStyles.fontSize]: true,
							[memeTextStyles.fontFace]: true,
						}"
						contenteditable="true"
						@contextmenu.prevent="openContextMenu($event)">
						{{ memeText }}
					</p>
					<div
						v-if="showContextMenu"
						class="border rounded-lg bg-base-300 w-fit p-2 [&>h1]:text-lg [&>h1]:font-bold [&>h2]:uppercase [&>h2]:font-roboto [&>h2]:text-sm [&>h2]:py-1 [&>h1]:py-1">
						<h1>Text Options</h1>
						<h2>Color</h2>
						<ul
							class="flex items-center space-x-2 bg-base-200 p-2 rounded-md">
							<li
								v-for="(option, index) in [
									{
										background: 'bg-red-500',
										text: 'text-red-500',
									},
									{
										background: 'bg-green-500',
										text: 'text-green-500',
									},
									{
										background: 'bg-yellow-500',
										text: 'text-yellow-500',
									},
									{
										background: 'bg-pink-500',
										text: 'text-pink-500',
									},
									{
										background: 'bg-teal-500',
										text: 'text-teal-500',
									},
									{
										background: 'bg-white',
										text: 'text-white',
									},
								]"
								:key="index"
								:class="option.background"
								class="w-6 h-6 rounded-md cursor-pointer"
								@click.prevent="
									() => {
										memeTextStyles.fontColor = option.text;
									}
								"></li>
						</ul>
						<h2>Size</h2>
						<ul class="bg-base-200 p-2 rounded-md">
							<li
								v-for="(option, index) in [
									{ text: 'small', style: 'text-sm' },
									{ text: 'normal', style: 'text-base' },
									{ text: 'large', style: 'text-lg' },
									{ text: 'x-large', style: 'text-xl' },
									{ text: 'xx-large', style: 'text-2xl' },
								]"
								:key="index"
								class="cursor-pointer hover:underline"
								:class="option.style"
								@click.prevent="
									() => {
										memeTextStyles.fontSize = option.style;
									}
								">
								{{ option.text }}
							</li>
						</ul>
						<h2>Font Style</h2>
						<ul class="bg-base-200 p-2 rounded-md">
							<li
								v-for="(option, index) in [
									{ text: 'Roboto', style: 'font-roboto' },
									{ text: 'Poppins', style: 'font-poppins' },
								]"
								:key="index"
								:class="option.style"
								class="cursor-pointer hover:underline"
								@click.prevent="
									() => {
										memeTextStyles.fontFace = option.style;
									}
								">
								{{ option.text }}
							</li>
						</ul>
						<h1>Image Options</h1>
					</div>
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
