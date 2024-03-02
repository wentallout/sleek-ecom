<script lang="ts">
	import Button from '$components/ui/button/button.svelte';
	import Input from '$components/ui/input/input.svelte';
	import {
		List,
		MagnifyingGlass,
		Heart,
		ShoppingCart,
		User,
		Dress,
		All,
		Shorts,
		Blazer
	} from '$icons';
	import Promo from '$sections/navbar/promo.svelte';
	import { slide } from 'svelte/transition';
	let currentHoveredCategory: string = '';

	import NextSeason from '$images/next-season.png';
	import MegaMenuItem from './mega-menu-item.svelte';

	import { ArrowRight, Conscious, Trousers, Skirt, Lingerie, Sale, Tshirt } from '$icons';
	import Store from '$icons/nav/store.svelte';

	import NightOut from '$images/night-out.png';
	import Modest from '$images/modest.png';

	import Office from '$images/office.png';
</script>

<Promo />
<header
	class="relative top-0 z-50 mb-5 border border-solid border-b-border bg-background pb-0 pt-3 shadow-sm">
	<div class="g-container flex flex-row justify-between">
		<div class="flex flex-row items-center gap-2">
			<Button class="block md:hidden" variant="outline">
				<List width="24" height="24" />
			</Button>
			<a href="/" class="text-2xl font-bold">SLEEK</a>
		</div>
		<div class="flex flex-row items-center gap-2">
			<Button class="block md:hidden" variant="outline">
				<MagnifyingGlass width="24" height="24" />
			</Button>
			<div class="hidden md:block">
				<Input placeholder="Search">
					<span slot="first-icon">
						<MagnifyingGlass width="24" height="24" />
					</span>
				</Input>
			</div>

			<Button variant="outline">
				<User class="md:mr-2" width="24" height="24" />
				<span class="hidden text-sm font-semibold md:block">Login</span>
			</Button>

			<Button variant="outline">
				<ShoppingCart width="24" height="24" />
			</Button>
		</div>
	</div>
	<div class="g-container flex w-full flex-row flex-wrap gap-4">
		<a on:mouseenter={() => (currentHoveredCategory = 'Clothing')} class="py-3" href="/"
			>Clothing
		</a>
		<a on:mouseenter={() => (currentHoveredCategory = 'Shoes')} class="py-3" href="/">Shoes</a>
		<a on:mouseenter={() => (currentHoveredCategory = 'Accessories')} class="py-3" href="/"
			>Accessories</a>
		<a class="py-3" href="/">Bestsellers</a>
		<a class="py-3" href="/">Promos</a>
	</div>

	{#if currentHoveredCategory !== ''}
		<div
			tabindex="1"
			role="menu"
			transition:slide
			on:mouseleave={() => (currentHoveredCategory = '')}
			class="absolute left-0 top-[100%] z-50 w-full bg-background bg-opacity-80 py-6 shadow-md backdrop-blur-lg">
			<div class="g-container">
				{#if currentHoveredCategory === 'Clothing'}
					<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
						<div class="flex flex-col gap-2">
							<h2 class="text-lg font-semibold">Clothing categories</h2>
							<MegaMenuItem>
								<All />
								All clothing</MegaMenuItem>
							<MegaMenuItem>New in Clothing</MegaMenuItem>
							<MegaMenuItem>Shirts & Tops</MegaMenuItem>
							<MegaMenuItem>
								<Tshirt />
								T-Shirts</MegaMenuItem>
							<MegaMenuItem>
								<Shorts />
								Shorts</MegaMenuItem>
							<MegaMenuItem>Swimwear & Beachwear</MegaMenuItem>
							<MegaMenuItem>
								<Blazer />
								Blazers</MegaMenuItem>
							<MegaMenuItem>Hoodies & Sweatshirts</MegaMenuItem>
							<MegaMenuItem>Coats & Jackets</MegaMenuItem>
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
								<img class="h-12 w-12 rounded-full object-cover" src={NightOut} alt="" />
								Night out
							</MegaMenuItem>
							<MegaMenuItem>
								<img class="h-12 w-12 rounded-full object-cover" src={Office} alt="" />
								Office
							</MegaMenuItem>
							<MegaMenuItem>
								<img class="h-12 w-12 rounded-full object-cover" src={Modest} alt="" />
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
							<a class="block h-[200px] w-auto" href="/">
								<img class="h-full w-full object-cover" src={NextSeason} alt="" />
								<div class="flex flex-row items-center gap-2 bg-secondary px-6 py-3">
									Trending next season
									<ArrowRight />
								</div>
							</a>
						</div>
					</section>
				{:else if currentHoveredCategory === 'Shoes'}
					<section>
						<div>Shoes test</div>
					</section>
				{:else if currentHoveredCategory === 'Accessories'}
					<section>
						<div class="">Acc</div>
					</section>
				{/if}
			</div>
		</div>
	{/if}
</header>
