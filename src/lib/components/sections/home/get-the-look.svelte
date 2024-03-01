<script>
	import HeadingWithShowAll from '$lib/components/ui/heading/heading-with-show-all.svelte';
</script>

<section class="g-container mb-28">
	<HeadingWithShowAll headingText="Get the look" />

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src="./src/lib/images/look1.png" alt="" />
		</div>
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src="./src/lib/images/look2.jpg" alt="" />
		</div>
		<div class="aspect-square">
			<img class="h-full w-full object-cover" src="./src/lib/images/look3.jpg" alt="" />
		</div>
	</div>
</section>
