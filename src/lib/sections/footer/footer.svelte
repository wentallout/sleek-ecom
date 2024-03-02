<script>
	import Input from '$components/ui/input/input.svelte';
	import Copyright from '$sections/footer/copyright.svelte';

	import * as DropdownMenu from '$components/ui/dropdown-menu';
	import { Button } from '$components/ui/button';

	import SocialIcons from './social-icons.svelte';

	let position = 'bottom';

	import ThemeDropdown from '$components/theme/theme-switcher.svelte';
</script>

<footer class="w-full bg-background py-12">
	<div class="container">
		<section class="grid grid-cols-1 gap-16 md:grid-cols-6">
			<div class="col-span-2">
				<div class="mb-4">Be the first to know about our special offers</div>
				<form class="mb-8 flex w-full max-w-sm items-center space-x-2">
					<Input type="email" placeholder="Email address" />
					<Button type="submit">Subscribe</Button>
				</form>
				<SocialIcons />
				<ThemeDropdown />
			</div>
			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">Product</h5>
				<a href="/">Bestsellers</a>
				<a href="/">FAQs</a>
				<a href="/">Shipping</a>
			</div>
			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">Help</h5>
				<a href="/">Track order</a>
				<a href="/">FAQs</a>
				<a href="/">Shipping</a>
				<a href="/">Returns</a>
				<a href="/">Contact Us</a>
			</div>

			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">About us</h5>
				<a href="/">About us</a>
				<a href="/">Career</a>
				<a href="/">Security</a>
				<a href="/">Press</a>
			</div>

			<div class="col-span-1 flex flex-col gap-3">
				<div class="flex flex-row items-center gap-4">
					<h5>Deliver to</h5>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button variant="outline" builders={[builder]}>Open</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56">
							<DropdownMenu.RadioGroup bind:value={position}>
								<DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
								<DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
							</DropdownMenu.RadioGroup>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>

				<div class="col-span-1 flex flex-row items-center gap-4">
					<h5>Language</h5>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild let:builder>
							<Button variant="outline" builders={[builder]}>Open</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content class="w-56">
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
	</div>
</footer>
<Copyright />
