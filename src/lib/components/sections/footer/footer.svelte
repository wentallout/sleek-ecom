<script>
	import Input from '$lib/components/ui/input/input.svelte';
	import Copyright from '$lib/components/sections/footer/copyright.svelte';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';

	let position = 'bottom';
</script>

<footer class="g-container">
	<div>insert social icon here</div>

	<section class="grid">
		<div class="">
			<div class="">Be the first to know about our special offers</div>
			<form class="flex w-full max-w-sm items-center space-x-2">
				<Input type="email" placeholder="email" />
				<Button type="submit">Subscribe</Button>
			</form>
		</div>
		<div class="flex flex-col">
			<h5 class="font-semibold">Help</h5>
			<a href="#">Track order</a>
			<a href="#">FAQs</a>
			<a href="#">Shipping</a>
			<a href="#">Returns</a>
			<a href="#">Contact Us</a>
		</div>

		<div class="flex flex-col">
			<h5 class="font-semibold">About us</h5>
			<a href="#">About us</a>
			<a href="#">Career</a>
			<a href="#">Security</a>
			<a href="#">Press</a>
		</div>

		<div class="flex flex-col">
			<div class="">
				<h5>Deliver to</h5>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="outline" builders={[builder]}>Open</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56">
						<DropdownMenu.Label>Panel Position</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.RadioGroup bind:value={position}>
							<DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>

			<div class="">
				<h5>Language</h5>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button variant="outline" builders={[builder]}>Open</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56">
						<DropdownMenu.Label>Panel Position</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.RadioGroup bind:value={position}>
							<DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</section>
</footer>
<Copyright />

<style>
	.grid {
		--min: 20ch;
		--gap: 3rem;

		display: grid;
		grid-gap: var(--gap);
		/* min() with 100% prevents overflow
  in extra narrow spaces */
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
	}
</style>
