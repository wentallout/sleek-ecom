<script>
	import * as Drawer from '$components/ui/drawer';
	import { ShoppingCart } from '$icons';
	import ProductInCart from '$sections/product/product-in-cart.svelte';
	import Button from '$components/ui/button/button.svelte';
</script>

<Drawer.Content
	class="left-auto right-0 top-0 mt-0 h-screen w-[80vw] rounded shadow-lg md:w-[500px]">
	<div class="h-screen w-full overflow-y-visible">
		<Drawer.Header>
			<Drawer.Title class="flex flex-row items-center gap-3">
				<ShoppingCart />
				Your Cart
			</Drawer.Title>
		</Drawer.Header>
		<div class="p-4 pb-0">
			<div class="">
				<div class="flex flex-col">
					<ProductInCart />
					<ProductInCart />
				</div>
			</div>
		</div>
		<Drawer.Footer>
			<Button>Checkout</Button>
			<Drawer.Close asChild let:builder>
				<Button builders={[builder]} variant="outline">Cancel</Button>
			</Drawer.Close>
		</Drawer.Footer>
	</div>
</Drawer.Content>
