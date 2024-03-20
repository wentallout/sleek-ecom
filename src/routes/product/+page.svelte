<script>
	import Blouse from '$images/subcategory-blouse.png';
	import Sleeveless from '$images/subcategory-sleeveless.png';
	import LongSleeve from '$images/subcategory-longsleeve.png';
	import Tunic from '$images/subcategory-tunic.png';
	import ProductFilter from '$sections/product/product-filter.svelte';
	import SubcategoryCard from '$components/ui/product/subcategory-card.svelte';
	import ProductGrid from '$sections/product/product-grid.svelte';
</script>

<h1 class="container mb-8 text-4xl font-semibold">Shirts and Tops for Women</h1>
<div class="container grid grid-cols-12 gap-4">
	<aside class="col-span-12 flex flex-col md:col-span-3">
		<a href="/" class="p-2">All clothing</a>
		<a href="/" class="p-2">Shirts and Tops</a>
		<a href="/" class="p-2">T-shirts</a>
		<a href="/" class="p-2">Shorts</a>
		<a href="/" class="p-2">Blazers</a>
		<a href="/" class="p-2">Swimwear</a>
		<a href="/" class="p-2">Hoodies & Sweatshirts</a>
		<a href="/" class="p-2">Pants</a>
		<a href="/" class="p-2">Skirts</a>
		<a href="/" class="p-2">Dresses</a>
		<a href="/" class="p-2">Lingerie</a>
	</aside>

	<main class="col-span-12 flex flex-col md:col-span-9">
		<section class="mb-10 flex flex-row flex-wrap gap-3">
			<SubcategoryCard url="/" imgUrl={Blouse} title="Blouses" />
			<SubcategoryCard url="/" imgUrl={Sleeveless} title="Sleeveless Tops" />
			<SubcategoryCard url="/" imgUrl={LongSleeve} title="Long-sleve Tops" />
			<SubcategoryCard url="/" imgUrl={Tunic} title="Tunic" />
		</section>
		<ProductFilter />
		<ProductGrid />
	</main>
</div>
