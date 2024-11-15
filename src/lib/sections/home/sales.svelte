<script>
	import sale1 from '$images/sale1.webp';
	import sale2 from '$images/sale2.webp';
	import sale3 from '$images/sale3.webp';
</script>

<section class="container mb-24 grid auto-rows-auto grid-cols-12 gap-4">
	<div class="relative col-span-12 w-auto overflow-hidden rounded-md md:col-span-6">
		<img loading="lazy" class="w-full object-cover" src={sale1} alt="" />
		<div class="absolute bottom-0 left-0 w-full bg-black px-3 py-2 text-white">
			<h2 class="text-lg font-semibold">Another marketing message</h2>
			<p>Lorem ipsum dolor</p>
		</div>
	</div>
	<div class="relative col-span-6 overflow-hidden rounded-md md:col-span-3">
		<img loading="lazy" class="h-full w-full object-cover" src={sale2} alt="" />

		<div class="absolute bottom-0 left-0 flex w-full flex-col gap-4 bg-black px-3 py-2 text-white">
			<h2 class="font-semibold">Up to 50% off on accessories</h2>
		</div>
	</div>
	<div class="relative col-span-6 overflow-hidden rounded-md md:col-span-3">
		<img loading="lazy" class="h-full w-full object-cover" src={sale3} alt="pregnant mums" />
		<div class="absolute bottom-0 left-0 w-full bg-black px-3 py-2 text-white">
			<h2 class="font-semibold">30% off on clothing for future mums</h2>
		</div>
	</div>
</section>
