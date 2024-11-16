<script lang="ts">
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';

	import * as Drawer from '$components/ui/drawer';

	import { fade } from 'svelte/transition';
	let currentCategory: string = '';

	import NextSeason from '$images/next-season.png';
	import MegaMenuItem from './mega-menu-item.svelte';

	export let data: LayoutServerData;

	import {
		List,
		MagnifyingGlass,
		ShoppingCart,
		User,
		Dress,
		All,
		Shorts,
		Blazer,
		Shirt,
		ArrowRight,
		Conscious,
		Trousers,
		Skirt,
		Lingerie,
		Sale,
		Tshirt,
		StarFour,
		Coat,
		Hoodie,
		Store,
		X,
		CaretDown,
		CaretUp
	} from '$icons';

	import NightOut from '$images/night-out.png';
	import Modest from '$images/modest.png';
	import Office from '$images/office.png';

	import CartDrawer from '$components/ui/cart/cart-drawer.svelte';

	let isNavOpen: boolean = false;
	const toggleNav = () => (isNavOpen = !isNavOpen);

	function toggleCategory(category: string) {
		currentCategory = category;
	}

	function closeCategory() {
		currentCategory = '';
	}

	import * as Dialog from '$lib/components/ui/dialog';
	import LoginForm from '$sections/account/login-form.svelte';
	import type { LayoutServerData } from '../../../routes/$types';
	import SleekLogo from '$images/sleek-logo.svelte';

	import ThemeDropdown from '$components/theme/theme-switcher.svelte';
	
</script>

<header class="glassy sticky top-0 z-50 mb-5 bg-background py-2 shadow-sm">
	<div class="container flex flex-row justify-between">
		<div class="flex flex-row items-center gap-2">
			<Button on:click={toggleNav} class="block md:hidden" variant="ghost">
				{#if !isNavOpen}
					<List width="24" height="24" />
				{:else}
					<X width="24" height="24" />
				{/if}
			</Button>
			<a href="/" class="h-5 pr-6 md:h-7">
				<SleekLogo />
			</a>
		</div>
		<div class="hidden max-w-2xl flex-grow md:block">
			<Input placeholder="Search">
				<span slot="first-icon">
					<MagnifyingGlass width="24" height="24" />
				</span>
			</Input>
		</div>
		<div class="flex flex-row items-center gap-2">
			<Button class="block md:hidden" variant="ghost">
				<MagnifyingGlass width="24" height="24" />
			</Button>

			<Dialog.Root>
				<Dialog.Trigger>
					<Button variant="ghost">
						<User class="md:mr-2" width="24" height="24" />
						<p class="hidden text-sm font-semibold md:block">Login</p>
					</Button>
				</Dialog.Trigger>
				<Dialog.Content>
					<Dialog.Header>
						<Dialog.Title>Login</Dialog.Title>
						<Dialog.Description>
							<LoginForm data={data.form} />
						</Dialog.Description>
					</Dialog.Header>
				</Dialog.Content>
			</Dialog.Root>

			<Drawer.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost">
					<ShoppingCart width="24" height="24" />
				</Button>
			</Drawer.Trigger>

			<ThemeDropdown />
		</div>
	</div>
	{#if isNavOpen}
		<!-- MOBILE -->
		<div
			transition:fade={{ duration: 100 }}
			class="glassy container absolute left-0 top-[100%] flex h-screen flex-col overflow-hidden md:hidden">
			<a href="/" class="flex h-[48px] items-center">Clothing</a>
			<a href="/" class="flex h-[48px] items-center">Shoes</a>
			<a href="/" class="flex h-[48px] items-center">Accessories</a>
			<a href="/" class="flex h-[48px] items-center">Bestsellers</a>
		</div>
	{/if}

	<div class="container hidden w-full flex-row flex-wrap md:flex">
		<button
			on:pointerover={() => toggleCategory('Clothing')}
			class="no-wrap group flex flex-row items-center gap-1 px-3 py-3 hover:bg-accent">
			Clothing

			<CaretDown class="transition-all group-hover:rotate-[180deg]" />
		</button>
		<button
			on:pointerover={() => toggleCategory('Shoes')}
			class="no-wrap flex flex-row items-center gap-1 px-3 py-3 hover:bg-accent">
			Shoes
		</button>
		<a class="px-3 py-3 hover:bg-accent" href="/"> Accessories </a>
		<a class="px-3 py-3 hover:bg-accent" href="/"> Bestsellers </a>
		<a class="px-3 py-3 hover:bg-accent" href="/"> Promos </a>
	</div>

	{#if currentCategory != ''}
		<div
			transition:fade={{ duration: 100 }}
			on:pointerleave={closeCategory}
			role="menu"
			class="glassy container absolute left-1/2 right-1/2 z-50 mt-4 hidden h-auto max-h-[70vh] -translate-x-1/2 overflow-y-auto rounded-md px-5 py-2 shadow-md md:block">
			{#if currentCategory === 'Clothing'}
				<section class="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<div class="flex flex-col gap-2">
						<h2 class="text-lg font-semibold">Clothing</h2>
						<MegaMenuItem>
							<StarFour width="24" height="24" />
							New
						</MegaMenuItem>
						<MegaMenuItem>
							<Shirt />
							Shirts & Tops</MegaMenuItem>
						<MegaMenuItem>
							<Tshirt />
							T-Shirts</MegaMenuItem>
						<MegaMenuItem>
							<Shorts />
							Shorts</MegaMenuItem>
						<MegaMenuItem>
							<Lingerie />
							Swimwear & Beachwear</MegaMenuItem>
						<MegaMenuItem>
							<Blazer />
							Blazers</MegaMenuItem>
						<MegaMenuItem>
							<Hoodie />
							Hoodies & Sweatshirts</MegaMenuItem>
						<MegaMenuItem>
							<Coat />
							Coats & Jackets</MegaMenuItem>
					</div>
					<div class="flex flex-col gap-2">
						<MegaMenuItem>
							<Trousers />
							Trousers
						</MegaMenuItem>
						<MegaMenuItem>
							<Skirt />
							Skirts
						</MegaMenuItem>
						<MegaMenuItem>
							<Dress />
							Dresses
						</MegaMenuItem>
						<MegaMenuItem>
							<Lingerie />
							Lingerie
						</MegaMenuItem>
						<MegaMenuItem>
							<Sale />
							On sale
						</MegaMenuItem>
					</div>

					<div class="flex flex-col gap-2">
						<h2 class="text-lg font-semibold">Style</h2>
						<MegaMenuItem>
							<img
								loading="lazy"
								class="h-12 w-12 rounded-full object-cover"
								src={NightOut}
								alt="" />
							Night out
						</MegaMenuItem>
						<MegaMenuItem>
							<img loading="lazy" class="h-12 w-12 rounded-full object-cover" src={Office} alt="" />
							Office
						</MegaMenuItem>
						<MegaMenuItem>
							<img loading="lazy" class="h-12 w-12 rounded-full object-cover" src={Modest} alt="" />
							Modest
						</MegaMenuItem>

						<h2 class="text-lg font-semibold">Fit</h2>
						<MegaMenuItem>Maternity</MegaMenuItem>
						<MegaMenuItem>Curvy</MegaMenuItem>
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="text-lg font-semibold">Discover</h2>
						<MegaMenuItem>
							<Conscious />
							Conscious
						</MegaMenuItem>
						<MegaMenuItem>
							<Store />
							Local merchants
						</MegaMenuItem>
						<a class="block h-[180px] w-auto" href="/">
							<img loading="lazy" class="h-full w-full object-cover" src={NextSeason} alt="" />
							<div class="flex flex-row items-center gap-2 bg-secondary px-6 py-3">
								Trending next season
								<ArrowRight />
							</div>
						</a>
					</div>
				</section>
			{/if}
			{#if currentCategory === 'Shoes'}
				<section>
					<div>Shoes test</div>
				</section>
			{/if}
		</div>
	{/if}
</header>

<CartDrawer />
