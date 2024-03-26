<script lang="ts">
	import ProductCard from '$components/ui/product/product-card.svelte';

	import product1 from '$images/product1.webp';
	import product2 from '$images/product2.webp';
	import product3 from '$images/product3.webp';
	import type { Product } from '$lib/types/Product';
	import Button from '$components/ui/button/button.svelte';

	export let products: Product[] = [
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: product1,
			discountPercent: 30,
			isNew: false,
			isHot: true,
			detailUrl: '/product/detail'
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: product2,
			discountPercent: 30,
			isNew: true,
			isHot: false,
			detailUrl: '/product/detail'
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: product3,
			discountPercent: 30,
			isNew: false,
			isHot: true,
			detailUrl: '/product/detail'
		},
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: product1,
			discountPercent: 30,
			isNew: false,
			isHot: true,
			detailUrl: '/product/detail'
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: product2,
			discountPercent: 69,
			isNew: true,
			isHot: false,
			detailUrl: '/product/detail'
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: product3,
			discountPercent: 0,
			isNew: false,
			isHot: false,
			detailUrl: '/product/detail'
		}
	];
</script>

<div class="mb-4">389 items</div>

<section class="mb-24 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</section>

<section class="flex flex-col items-center justify-center gap-6">
	<div class="">100 of 389 items are shown</div>
	<Button variant="secondary" class="mb-24 min-h-14 w-1/2 text-base font-semibold">
		Load more
	</Button>
</section>
