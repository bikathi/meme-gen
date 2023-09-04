<script setup></script>

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
						>Step 2: Add Your Meme Text</span
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
