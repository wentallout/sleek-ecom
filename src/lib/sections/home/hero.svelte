<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import hero from '$images/hero.png';

	Button;
</script>

<section class="g-container mb-10 flex flex-row flex-wrap items-end gap-4 md:gap-12">
	<img class="h-auto w-full rounded object-cover md:h-[500px] md:w-auto" src={hero} alt="" />

	<div class="flex flex-col gap-6 md:py-20">
		<h1 class="text-3xl font-semibold md:text-5xl">Find your style</h1>
		<p>We are stylish af. Come and see our products.</p>
		<Button>Shop Now</Button>
	</div>
</section>
