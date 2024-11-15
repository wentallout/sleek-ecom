<script>
	export let categoryUrl = '';
	export let imgUrl = '';
	export let title = '';
</script>

<a href={categoryUrl} class="relative h-[300px] overflow-hidden rounded">
	<enhanced:img class="h-full w-full object-cover" src={imgUrl} alt={imgUrl} loading="lazy" />
	<p
		class="absolute bottom-[24px] left-1/2 flex h-[32px] -translate-x-1/2 transform items-center justify-center rounded-full bg-black px-4 py-5 text-white shadow-sm">
		{title}
	</p>
</a>
