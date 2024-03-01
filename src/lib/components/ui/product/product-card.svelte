<script lang="ts">
	import product1 from '$lib/images/product1.png';
	import ProductBadge from './product-badge.svelte';

	export let product: any;
</script>

<div class="flex flex-col overflow-hidden">
	<div class="relative h-[458px] max-w-[284px]">
		<img class="h-full w-full rounded object-cover" src={product.thumbnailUrl} alt="" />
		<div class="absolute bottom-1 left-1 flex flex-row flex-nowrap gap-1">
			<ProductBadge>NEW</ProductBadge>
			<ProductBadge>-25%</ProductBadge>
		</div>
	</div>
	<div class="font-semibold">{product.brand}</div>
	<div class="">{product.name}</div>
	<div class="">{product.price}</div>
</div>
