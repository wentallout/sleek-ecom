<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import ProductCard from '$lib/components/ui/product/product-card.svelte';

	import product1 from '$lib/images/product1.png';

	export let products: any = [
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: './src/lib/images/product1.png'
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: './src/lib/images/product2.png'
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: './src/lib/images/product3.png'
		},
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: './src/lib/images/product1.png'
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: './src/lib/images/product2.png'
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: './src/lib/images/product3.png'
		}
	];
</script>

<Carousel.Root class="w-full">
	<Carousel.Content class="-ml-2">
		{#each products as product, i (i)}
			<Carousel.Item class="basis-1/2 pl-2 md:basis-1/5">
				<ProductCard {product} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
