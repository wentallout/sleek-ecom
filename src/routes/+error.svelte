<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page}
	<section class="container">
		<p class="text-base">Error code: {$page.status}</p>

		{#if $page.error}
			<h1 class="text-4xl font-semibold">{$page.error.message}</h1>
		{/if}
	</section>
{/if}
