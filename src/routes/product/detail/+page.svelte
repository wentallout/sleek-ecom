<script lang="ts">
	import { ShoppingCart, Heart } from '$icons';
	import detail1 from '$images/detail1.png';
	import detail2 from '$images/detail2.png';
	import detail3 from '$images/detail3.png';
	import detail4 from '$images/detail4.png';
	import detail5 from '$images/detail5.png';
	import detail6 from '$images/detail6.png';

	import { Button } from '$lib/components/ui/button';

	import Comment from '$components/ui/review/review.svelte';

	import ProductCarousel from '$sections/product/product-carousel.svelte';

	let data = {
		brandName: 'Storeez',
		productName: 'Mercerised-jersey shirt',
		productImages: [detail1, detail2, detail3, detail4, detail5, detail6],
		rankScore: 4.5,
		price: '$149',
		productColors: ['grey', 'white'],
		sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
		reviews: [
			{
				reviewTitle: 'Good basic',
				reviewContent: 'Im very happy',
				reviewScore: 4.5,
				date: '22/03/2024'
			},
			{
				reviewTitle: 'So soft',
				reviewContent:
					'When I first tried this shirt on I was impressed with how soft it feels as a button down. Most of my other brand button downs are stiff and crisp. I like how it lays light weight on my body too.',
				reviewScore: 4.5,
				date: '22/03/2024'
			},
			{
				reviewTitle: 'Fabulous Fabric',
				reviewContent:
					'This shirt was exactly what I needed for my sensitive skin. The softness of the fabric is delightful.',
				reviewScore: 4.5,
				date: '22/03/2024'
			}
		]
	};

	let currentDisplayImage = data.productImages[0];

	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import HeadingWithShowAll from '$components/ui/heading/heading-with-show-all.svelte';
</script>

<div class="container">
	<div class="mb-32 grid grid-cols-12 gap-9">
		<section class="col-span-12 grid grid-cols-12 gap-4 md:col-span-6 md:grid-cols-6">
			<div class="col-span-12 flex flex-row gap-2 overflow-hidden md:col-span-1 md:flex-col">
				{#each data.productImages as productImage}
					<img class="h-auto w-full object-cover" src={productImage} alt="" />
				{/each}
			</div>

			<div class="col-span-12 md:col-span-5">
				<img class="w-full object-cover" src={currentDisplayImage} alt="" />
			</div>
		</section>

		<section class="col-span-12 md:col-span-6">
			<div class="mb-2 text-lg font-semibold">{data.brandName}</div>
			<h1 class="mb-4 text-3xl font-semibold">{data.productName}</h1>
			<div class="mb-8">{data.rankScore}</div>

			<p class="mb-4 text-3xl font-semibold text-rose-700">
				{data.price}
			</p>

			<div class="">{data.productColors}</div>

			<div class="mb-10 flex flex-col">
				<p class="mb-3 font-semibold">Size</p>
				<div class="flex flex-row flex-wrap gap-2">
					{#each data.sizes as size}
						<div class="rounded-[4px] border border-border px-4 py-3">{size}</div>
					{/each}
				</div>
			</div>

			<div class="mb-12 flex gap-2">
				<Button class="flex-grow gap-1 py-7 text-base font-semibold">
					<ShoppingCart width="24" height="24" />
					Add to bag
				</Button>
				<Button variant="secondary" class="py-7 text-base font-semibold">
					<Heart width="24" height="24" />
				</Button>
			</div>

			<Accordion.Root class="w-full">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Product details & Care</Accordion.Trigger>
					<Accordion.Content>
						<div>
							<h4>Product Details</h4>
							<p>
								Explore the detailed description, size chart, and material information for each
								product.
							</p>
						</div>

						<div>
							<h4>How to Care</h4>
							<p>Learn how to properly care for your garments to ensure longevity and quality.</p>
						</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>
						<h3 class="font-semibold">Size & Fit</h3>
					</Accordion.Trigger>
					<Accordion.Content>
						<div>
							<h4>Size and Fit</h4>
							<p>
								Find guidance on selecting the right size and understanding the fit of our products.
							</p>
						</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>
						<h3 class="font-semibold">Delivery & Returns</h3>
					</Accordion.Trigger>
					<Accordion.Content>
						<div>
							<h4>1. Delivery Time:</h4>
							<p>
								Standard delivery typically takes 5-7 business days, while express options are
								available for quicker delivery.
							</p>
						</div>

						<div>
							<h4>2. Shipping Charges:</h4>
							<p>
								Shipping costs are calculated based on weight and location and can be viewed at
								checkout.
							</p>
						</div>

						<div>
							<h4>3. Tracking Orders</h4>
							<p>Once your order is shipped, you'll receive a tracking number via email.</p>
						</div>

						<div>
							<h4>4. Returns</h4>
							<p>
								Items can be returned within 30 days for a refund or exchange if in original
								condition.
							</p>
						</div>

						<div>
							<h4>5. Return Process</h4>
							<p>Contact our customer service with your order number to initiate a return.</p>
						</div>

						<div>
							<h4>6. Non-returnable Items</h4>
							<p>Hygiene items like swimwear and lingerie cannot be returned unless faulty.</p>
						</div>

						<div>
							<h4>7. Return Shipping</h4>
							<p>Customers are responsible for return shipping unless the item is faulty.</p>
						</div>

						<div>
							<h4>8. Return Processing Time</h4>
							<p>Returns are processed within 5-7 business days of receipt.</p>
						</div>

						<div>
							<h4>9. Faulty or Damaged Items:</h4>
							<p>Contact us immediately for assistance with faulty or damaged items.</p>
						</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>

			<section class="mb-8">
				{#each data.reviews as review}
					<Comment
						score={review.reviewScore}
						title={review.reviewTitle}
						content={review.reviewContent} />
				{/each}
			</section>
			<Button class="font-semibold" variant="secondary">Read all 24 reviews</Button>
		</section>
	</div>
	<section class="mb-24">
		<HeadingWithShowAll headingText="Style it with" />
		<ProductCarousel />
	</section>

	<section class="mb-24">
		<HeadingWithShowAll headingText="Similar items" />
		<ProductCarousel />
	</section>

	<section class="mb-24">
		<HeadingWithShowAll headingText="Recently viewed" />
		<ProductCarousel />
	</section>
</div>

<style>
	section {
		/* border: 1px solid red; */
	}
</style>
