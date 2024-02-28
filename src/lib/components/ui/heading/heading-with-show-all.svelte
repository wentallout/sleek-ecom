<script lang="ts">
	export let headingText: string = '';
	import ShowAll from '../button/show-all.svelte';
</script>

<div class="flex flex-row justify-between">
	<h2 class="text-xl font-semibold">{headingText}</h2>
	<ShowAll url="/" />
</div>
