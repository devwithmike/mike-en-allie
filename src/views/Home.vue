<script setup>
	import {ref} from 'vue'

	let images = [
		"\"/images/1.jpg\"",
		"\"/images/2.jpg\"",
		"\"/images/3.jpeg\"",
		"\"/images/4.jpg\""
	]
</script>

<template>
	<div id="slideshow" class="relative w-full h-screen overflow-hidden" :data-zs-src="'['+images+']'" data-zs-overlay="false" data-zs-bullets="false">
		<div id="content">
			<div class="flex flex-col justify-around mx-auto align-center">
				<h1 class="mb-4 text-4xl font-medium leading-none text-black title xl:text-8xl lg:text-7xl md:text-6xl md:mb-12 sm:text-5xl">
					<span class="inline-block">Mike</span><small class="inline-block px-6 text-2xl xl:text-5xl lg:text-4xl md:text-3xl">&amp;</small><span class="inline-block">Allie's</span><br>
          <span class="inline-block">Wedding</span>
				</h1>
				<div class="mt-10 text-base not-italic font-light text-black subtitle md:text-2xl">FEB <span class="xl:text-6xl text-5xl relative top-2.5 pb-3 mx-3.5">18</span> 2023</div>
				<h3 class="mt-24">Wedding photos still to come</h3>
			</div>
		</div>
	</div>
</template>
