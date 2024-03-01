<script>
	import HeadingWithShowAll from '$lib/components/ui/heading/heading-with-show-all.svelte';

	import look1 from '$images/look1.webp';
	import look2 from '$images/look2.jpg';
	import look3 from '$images/look3.jpg';
</script>

<section class="g-container mb-28">
	<HeadingWithShowAll headingText="Get the look" />

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src={look1} alt="" />
		</div>
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src={look2} alt="" />
		</div>
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src={look3} alt="" />
		</div>
	</div>
</section>
