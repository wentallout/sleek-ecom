<script>
	import ProductBadge from '$components/ui/product/product-badge.svelte';
	import { X } from '$icons';
	import product1 from '$images/product1.webp';
</script>

<article
	class="group flex flex-row flex-wrap justify-between border-b border-solid border-b-border py-5">
	<div class="relative flex flex-row gap-4">
		<button
			class="center absolute left-[-12px] top-[-12px] hidden place-content-center rounded-full bg-background p-1 shadow group-hover:grid">
			<X class="h-4 w-4" />
		</button>
		<img loading="lazy" class="h-[128px] w-auto object-cover" src={product1} alt="" />
		<div class="flex flex-col">
			<h3 class="text-base font-semibold md:text-lg">ProductName</h3>
			<p class="text-sm text-muted-foreground">Color: Grey</p>
			<p class="text-sm text-muted-foreground">Size: M</p>
			<ProductBadge>2 left</ProductBadge>
		</div>
	</div>
	<div class="flex flex-col">
		<div class="flex flex-row gap-4 md:gap-14">
			<div class="">Quantity: 1</div>
			<div class="flex flex-col">
				<div class="text-base text-muted-foreground line-through">$22</div>
				<div class="text-lg font-semibold">$22</div>
			</div>
		</div>
	</div>
</article>
