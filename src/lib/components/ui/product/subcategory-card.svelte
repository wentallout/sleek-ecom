<script lang="ts">
	export let url: string = '';
	export let imgUrl: string = '';
	export let title: string = '';

	let alt: string = `image of ${title}`;
</script>

<a href={url} class="flex flex-col gap-2 md:col-span-2">
	<img class="h-[180px] w-auto rounded object-cover" src={imgUrl} {alt} />
	<div class="text-sm font-semibold">{title}</div>
</a>
