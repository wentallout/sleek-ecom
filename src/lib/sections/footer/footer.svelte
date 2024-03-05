<script>
	import Input from '$components/ui/input/input.svelte';
	import Copyright from '$sections/footer/copyright.svelte';

	import * as DropdownMenu from '$components/ui/dropdown-menu';
	import { Button } from '$components/ui/button';

	import SocialIcons from './social-icons.svelte';

	let position = 'bottom';

	import * as Select from '$lib/components/ui/select';

	import ThemeDropdown from '$components/theme/theme-switcher.svelte';
</script>

<footer class="w-full bg-background py-12">
	<div class="container">
		<section class="grid grid-cols-2 gap-x-12 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
			<div class="col-span-2 flex flex-col gap-4">
				<div class="mb-4">Be the first to know about our special offers</div>
				<form class="mb-8 flex w-full flex-grow items-center space-x-2">
					<Input type="email" placeholder="Email address" />
					<Button type="submit">Subscribe</Button>
				</form>
				<SocialIcons />
				<ThemeDropdown />
			</div>
			<div class="flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">Product</h5>
				<a href="/">Bestsellers</a>
				<a href="/">FAQs</a>
				<a href="/">Shipping</a>
			</div>
			<div class="flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">Help</h5>
				<a href="/">Track order</a>
				<a href="/">FAQs</a>
				<a href="/">Shipping</a>
				<a href="/">Returns</a>
				<a href="/">Contact Us</a>
			</div>

			<div class="flex flex-col gap-1">
				<h5 class="mb-4 font-semibold">About us</h5>
				<a href="/">About us</a>
				<a href="/">Career</a>
				<a href="/">Security</a>
				<a href="/">Press</a>
			</div>

			<div class="flex flex-col gap-3">
				<div class="flex flex-row items-center gap-4">
					<h5 class="min-w-[100px]">Deliver to</h5>
					<Select.Root>
						<Select.Trigger class="flex-grow">
							<Select.Value placeholder="US" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">US</Select.Item>
							<Select.Item value="light">Vietnam</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>

				<div class="flex flex-row items-center gap-4">
					<h5 class="min-w-[100px]">Language</h5>
					<Select.Root>
						<Select.Trigger>
							<Select.Value placeholder="English" />
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="light">English</Select.Item>
							<Select.Item value="dark">Vietnamese</Select.Item>
							<Select.Item value="system">Deutsch</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</section>
	</div>
</footer>
<Copyright />
