<script lang="ts">
	import ProductCard from '$components/ui/product/product-card.svelte';

	import product1 from '$images/product1.webp';
	import product2 from '$images/product2.webp';
	import product3 from '$images/product3.webp';
	import type { Product } from '$lib/types/Product';

	export let products: Product[] = [
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: product1,
			discountPercent: 30,
			isNew: false,
			isHot: true
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: product2,
			discountPercent: 30,
			isNew: true,
			isHot: false
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: product3,
			discountPercent: 30,
			isNew: false,
			isHot: true
		},
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: product1,
			discountPercent: 30,
			isNew: false,
			isHot: true
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: product2,
			discountPercent: 69,
			isNew: true,
			isHot: false
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: product3,
			discountPercent: 0,
			isNew: false,
			isHot: false
		}
	];
</script>

<section class="mb-24 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-3">
	{#each products as product}
		<ProductCard {product} />
	{/each}
</section>
