<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page}
	<section class="container">
		<p class="text-">Error code: {$page.status}</p>
		<h1 class="text-4xl font-semibold">{$page.error.message}</h1>
	</section>
{/if}
