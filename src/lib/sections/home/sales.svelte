<script>
	import Button from '$lib/components/ui/button/button.svelte';

	import sale1 from '$images/sale1.webp';
	import sale2 from '$images/sale2.webp';
	import sale3 from '$images/sale3.webp';
</script>

<section class="g-container mb-24 grid auto-rows-auto gap-4 rounded md:grid-cols-4">
	<div class="relative col-span-2 h-[400px] w-auto overflow-hidden md:col-span-2">
		<img class="h-[400px] w-full object-cover" src={sale1} alt="" />
		<div class="absolute bottom-0 left-0 w-full bg-black px-3 py-2 text-white">
			<h2 class="text-lg font-semibold">Another marketing message</h2>
			<p>Lorem ipsum dolor</p>
		</div>
	</div>
	<div class="relative col-span-1 h-[400px] overflow-hidden rounded md:col-span-1">
		<img class="h-full w-full object-cover" src={sale2} alt="" />

		<div class="absolute bottom-0 left-0 w-full bg-black px-3 py-2 text-white">
			<h2>Up to 50% off on accessories</h2>
			<Button>Shop Now</Button>
		</div>
	</div>
	<div class="relative col-span-1 h-[400px] overflow-hidden rounded md:col-span-1">
		<img class="h-full w-full object-cover" src={sale3} alt="pregnant mums" />
		<div class="absolute bottom-0 left-0 w-full bg-black px-3 py-2 text-white">
			<h2>Up to 30% off on clothing for future mums</h2>
			<Button>Shop Now</Button>
		</div>
	</div>
</section>
