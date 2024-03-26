<script lang="ts">
	export let headingText: string = '';
	export let showAllUrl: string = '/';
	import ShowAllButton from '$lib/components/ui/button/show-all.svelte';
</script>

<div class="mb-4 flex flex-row justify-between">
	<h2 class="text-xl font-semibold">{headingText}</h2>
	<ShowAllButton url={showAllUrl} />
</div>
