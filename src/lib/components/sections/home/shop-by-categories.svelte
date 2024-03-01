<script>
	import CategoryCard from '$lib/components/ui/product/category-card.svelte';
	import CategoryClothing from '$lib/images/category-clothing.jpg';

	import CategoryShoes from '$lib/images/category-shoes.jpg';

	import CategorySportwear from '$lib/images/category-sportwear.jpg';

	import CategoryAcc from '$lib/images/category-acc.jpg';

	import ArrowRight from '~icons/ph/arrow-right';
	import HeadingWithShowAll from '$lib/components/ui/heading/heading-with-show-all.svelte';

	HeadingWithShowAll;
</script>

<section class="g-container mb-28">
	<HeadingWithShowAll headingText="Categories" />
	<div class="grid">
		<a href="/" class="flex flex-col items-center justify-center rounded bg-blue-200">
			<div class="text-2xl font-semibold text-blue-700">All Categories</div>
			<div class="flex flex-row gap-2 text-blue-700">
				Discover
				<ArrowRight />
			</div>
		</a>

		<CategoryCard imgUrl={CategoryClothing} title="Clothing" />
		<CategoryCard imgUrl={CategoryShoes} title="Shoes" />
		<CategoryCard imgUrl={CategorySportwear} title="Sportwear" />
		<CategoryCard imgUrl={CategoryAcc} title="Accessories" />
	</div>
</section>

<style>
	.grid {
		--min: 24ch;
		--gap: 1rem;

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
