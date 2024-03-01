<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="g-container">
	<p class="text-">Error code: {$page.status}</p>
	<h1 class="text-4xl font-semibold">{$page.error.message}</h1>
</section>
