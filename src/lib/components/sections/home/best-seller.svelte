<script>
	import ShowAll from '$lib/components/ui/button/show-all.svelte';
	import * as Carousel from '$lib/components/ui/carousel';
	import HeadingWithShowAll from '$lib/components/ui/heading/heading-with-show-all.svelte';
	import ProductCard from '$lib/components/ui/product/product-card.svelte';
</script>

<section class="g-container mb-24">
	<HeadingWithShowAll headingText="Bestsellers" />

	<Carousel.Root class="w-full">
		<Carousel.Content class="-ml-2">
			{#each Array(15) as _, i (i)}
				<Carousel.Item class="basis-1/2 pl-2 md:basis-1/5">
					<ProductCard />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</section>
