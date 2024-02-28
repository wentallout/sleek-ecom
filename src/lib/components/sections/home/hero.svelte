<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import hero from '$lib/images/hero.png';

	Button;
</script>

<section class="g-container mb-10 flex flex-row flex-wrap items-center gap-4">
	<img class="h-[500px] w-auto rounded" src={hero} alt="" />

	<div class="">
		<h1 class="text-5xl font-semibold">Find your style</h1>
		<p>We are stylish af</p>
		<Button>Shop Now</Button>
	</div>
</section>
