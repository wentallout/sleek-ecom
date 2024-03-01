<script>
	import Input from '$lib/components/ui/input/input.svelte';
	import Copyright from '$lib/components/sections/footer/copyright.svelte';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { SOCIAL_FB_URL } from '$lib/constants';
	import SocialIcons from './social-icons.svelte';

	let position = 'bottom';
</script>

<footer class="w-full bg-slate-100 py-12">
	<div class="g-container">
		<section class="grid grid-cols-1 gap-16 md:grid-cols-6">
			<div class="col-span-2">
				<div class="mb-4">Be the first to know about our special offers</div>
				<form class="mb-8 flex w-full max-w-sm items-center space-x-2">
					<Input type="email" placeholder="Email address" />
					<Button type="submit">Subscribe</Button>
				</form>
				<SocialIcons />
			</div>
			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="font-semibold">Help</h5>
				<a href="#">Track order</a>
				<a href="#">FAQs</a>
				<a href="#">Shipping</a>
				<a href="#">Returns</a>
				<a href="#">Contact Us</a>
			</div>
			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="font-semibold">Help</h5>
				<a href="#">Track order</a>
				<a href="#">FAQs</a>
				<a href="#">Shipping</a>
				<a href="#">Returns</a>
				<a href="#">Contact Us</a>
			</div>

			<div class="col-span-1 flex flex-col gap-1">
				<h5 class="font-semibold">About us</h5>
				<a href="#">About us</a>
				<a href="#">Career</a>
				<a href="#">Security</a>
				<a href="#">Press</a>
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
