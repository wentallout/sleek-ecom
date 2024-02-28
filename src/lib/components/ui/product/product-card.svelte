<script>
	import product1 from '$lib/images/product1.png';
	import ProductBadge from './product-badge.svelte';

	ProductBadge;
</script>

<div class="flex flex-col overflow-hidden">
	<div class="relative h-[458px] max-w-[284px]">
		<img class="h-full w-full rounded object-cover" src={product1} alt="" />
		<div class="absolute bottom-1 left-1 flex flex-row flex-nowrap gap-1">
			<ProductBadge>NEW</ProductBadge>
			<ProductBadge>-25%</ProductBadge>
		</div>
	</div>
	<div class="font-semibold">brand name</div>
	<div class="">Mercerised-jersey shorts</div>
	<div class="">$99</div>
</div>
