<script lang="ts">
	export let rating: number = 0;

	let fullStars = Math.floor(rating);
	let halfStars = Math.ceil(rating) - fullStars;
	let emptyStars = 5 - fullStars - halfStars;
</script>

<div class="flex">
	{#each Array(fullStars) as _, i}
		<FullStar key={i} />
	{/each}
	{#if halfStars === 1}
		<HalfStar />
	{/if}
	{#each Array(emptyStars) as _, i}
		<EmptyStar key={i} />
	{/each}
</div>
