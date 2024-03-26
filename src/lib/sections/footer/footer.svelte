<script>
	import Input from '$components/ui/input/input.svelte';
	import Copyright from '$sections/footer/copyright.svelte';
	import { Button } from '$components/ui/button';
	import SocialIcons from './social-icons.svelte';
	import * as Select from '$lib/components/ui/select';
	import ThemeDropdown from '$components/theme/theme-switcher.svelte';
	import FooterHeading from './footer-heading.svelte';
	import FooterItem from './footer-item.svelte';

	import Marquee from '$components/ui/marquee/marquee.svelte';
</script>

<footer class="mt-24 w-full border-b-2 bg-muted py-12">
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
			<div class="flex flex-col">
				<FooterHeading heading="Product" />
				<FooterItem name="Bestseller" />
				<FooterItem name="Shoes" />
			</div>
			<div class="flex flex-col">
				<FooterHeading heading="Help" />
				<FooterItem name="Bestseller" />
				<FooterItem name="Shipping" />
				<FooterItem name="Returns" />
				<FooterItem name="Track order" />
				<FooterItem name="FAQ" />
			</div>

			<div class="flex flex-col">
				<FooterHeading heading="About Us" />
				<FooterItem name="About" />
				<FooterItem name="Career" />
				<FooterItem name="Security" />
				<FooterItem name="Press" />
			</div>

			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-4">
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

				<div class="flex flex-col gap-4">
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
<Marquee />
