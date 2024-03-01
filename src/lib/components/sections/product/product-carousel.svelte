<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import ProductCard from '$lib/components/ui/product/product-card.svelte';
	import Autoplay from 'embla-carousel-autoplay';

	export let products: any = [
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: './src/lib/images/product1.png',
			discountPercent: 30,
			isNew: false,
			isHot: true
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: './src/lib/images/product2.png',
			discountPercent: 30,
			isNew: true,
			isHot: false
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: './src/lib/images/product3.png',
			discountPercent: 30,
			isNew: false,
			isHot: true
		},
		{
			name: 'Clothes 1',
			brand: 'brandName1',
			price: 145,
			thumbnailUrl: './src/lib/images/product1.png',
			discountPercent: 10
		},
		{
			name: 'Clothes 2',
			brand: 'brandName2',
			price: 145,
			thumbnailUrl: './src/lib/images/product2.png',
			discountPercent: 20
		},
		{
			name: 'Clothes 3',
			brand: 'brandName3',
			price: 333,
			thumbnailUrl: './src/lib/images/product3.png',
			discountPercent: 20
		}
	];

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<Carousel.Root class="w-full" plugins={[plugin]}>
	<Carousel.Content class="-ml-2">
		{#each products as product, i (i)}
			<Carousel.Item class="basis-1/2 pl-2 md:basis-1/3 lg:basis-1/5">
				<ProductCard {product} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
