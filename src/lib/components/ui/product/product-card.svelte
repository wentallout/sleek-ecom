<script lang="ts">
	import ProductBadge from './product-badge.svelte';

	import type { Product } from '$lib/types/Product';
	import { Heart } from '$icons';

	export let product: Product;

	let discountedPrice: number = 0;

	if (product.discountPercent && product.discountPercent > 0) {
		discountedPrice = parseFloat(
			(product.price - (product.discountPercent / 100) * product.price).toFixed(0)
		);
	}
</script>

<a href={product.detailUrl}>
	<article class="flex flex-col overflow-hidden">
		<div class="relative mb-2">
			<button
				class="absolute right-0 top-0 grid h-10 w-10 place-items-center rounded-full transition-all hover:bg-primary-foreground">
				<Heart />
			</button>
			<img
				loading="lazy"
				class="h-full min-h-[224px] w-full rounded-md object-cover md:min-h-[378px]"
				src={product.thumbnailUrl}
				alt="product thumbnail" />
			<div class="absolute bottom-1 left-1 flex flex-row flex-nowrap gap-1">
				{#if product.isNew === true}
					<ProductBadge>NEW</ProductBadge>
				{/if}
				{#if product.isHot === true}
					<ProductBadge>HOT</ProductBadge>
				{/if}

				{#if product.discountPercent && product.discountPercent > 0}
					<ProductBadge>-{product.discountPercent}%</ProductBadge>
				{/if}
			</div>
		</div>
		<div class="font-semibold">{product.brand}</div>
		<h3 class="">{product.name}</h3>

		{#if product.discountPercent && product.discountPercent > 0}
			<div class="flex flex-row gap-2">
				<span class="font-semibold">${discountedPrice}</span>
				<span class="text-neutral-500 line-through">
					${product.price}
				</span>
			</div>
		{:else}
			<div class="font-semibold">${product.price}</div>
		{/if}
	</article>
</a>
