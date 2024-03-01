<script lang="ts">
	import ProductBadge from './product-badge.svelte';

	import type { Product } from '$lib/types/Product';

	export let product: Product;

	let discountedPrice: number = 0;

	if (product.discountPercent && product.discountPercent > 0) {
		discountedPrice = parseFloat(
			(product.price - (product.discountPercent / 100) * product.price).toFixed(0)
		);
	}
</script>

<div class="flex flex-col overflow-hidden">
	<div class="relative mb-2 h-[240px] w-auto md:h-[458px]">
		<img class="h-full w-auto rounded object-cover" src={product.thumbnailUrl} alt="" />
		<div class="absolute bottom-1 left-1 flex flex-row flex-nowrap gap-1">
			{#if product.isNew}
				<ProductBadge>NEW</ProductBadge>
			{/if}
			{#if product.isHot}
				<ProductBadge>HOT</ProductBadge>
			{/if}

			{#if product.discountPercent && product.discountPercent > 0}
				<ProductBadge>{product.discountPercent}%</ProductBadge>
			{/if}
		</div>
	</div>
	<div class="font-semibold">{product.brand}</div>
	<div class="">{product.name}</div>

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
</div>
