<script lang="ts">
	import * as Carousel from '$components/ui/carousel';
	import ProductCard from '$components/ui/product/product-card.svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

	import type { Product } from '$lib/types/Product';
	import product1 from '$images/product1.webp';
	import product2 from '$images/product2.webp';
	import product3 from '$images/product3.webp';

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
		}
	];

	const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<Carousel.Root
	opts={{ loop: true, containScroll: 'keepSnaps', align: 'start' }}
	class="w-full overflow-hidden"
	plugins={[autoplayPlugin, WheelGesturesPlugin({ forceWheelAxis: 'x' })]}>
	<Carousel.Content class="-ml-2">
		{#each products as product, i (i)}
			<Carousel.Item class="3xl:basis-[16%] basis-[49%] pl-2 md:basis-[32%] lg:basis-[19%]">
				<ProductCard {product} />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
