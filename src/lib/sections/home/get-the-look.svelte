<script>
	import HeadingWithShowAll from '$lib/components/ui/heading/heading-with-show-all.svelte';

	import look1 from '$images/look1.webp?enhanced';
	import look2 from '$images/look2.webp?enhanced';
	import look3 from '$images/look3.webp?enhanced';
</script>

<section class="container mb-28">
	<HeadingWithShowAll headingText="Get the look" />

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="aspect-square">
			<enhanced:img loading="lazy" class="h-full w-full object-cover" src={look1} alt="" />
		</div>
		<div class="aspect-square">
			<enhanced:img loading="lazy" class="h-full w-full object-cover" src={look2} alt="" />
		</div>
		<div class="aspect-square">
			<enhanced:img loading="lazy" class="h-full w-full object-cover" src={look3} alt="" />
		</div>
	</div>
</section>
