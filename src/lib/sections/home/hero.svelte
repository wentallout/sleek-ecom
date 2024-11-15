<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import hero from '$images/hero.webp?enhanced';

	Button;
</script>

<section class="container mb-10">
	<div class="grid w-full grid-cols-12 grid-rows-1 gap-8">
		<div class="col-span-12 md:col-span-7">
			<enhanced:img class="rounded-md object-cover" src={hero} alt="" loading="eager" />
		</div>
		<div
			class="col-span-12 flex flex-grow flex-col justify-center gap-6 text-balance md:col-span-5">
			<h1 class="text-3xl font-semibold md:text-5xl">Find your style</h1>
			<p>We are stylish. Come and see our products.</p>
			<Button>Shop Now</Button>
		</div>
	</div>
</section>
