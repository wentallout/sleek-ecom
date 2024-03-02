<script>
	import CategoryCard from '$components/ui/product/category-card.svelte';
	import CategoryClothing from '$images/category-clothing.webp';

	import CategoryShoes from '$images/category-shoes.webp';

	import CategorySportwear from '$images/category-sportwear.webp';

	import CategoryAcc from '$images/category-acc.webp';

	import ArrowRight from '~icons/ph/arrow-right';
	import HeadingWithShowAll from '$components/ui/heading/heading-with-show-all.svelte';

	HeadingWithShowAll;
</script>

<section class="g-container mb-28">
	<HeadingWithShowAll headingText="Categories" />
	<div class="grid gap-4">
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
		--min: 20ch;

		display: grid;

		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
