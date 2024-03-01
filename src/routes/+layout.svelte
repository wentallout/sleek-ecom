<script lang="ts">
	
	import Footer from '$sections/footer/footer.svelte';
	import Navbar from '$sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights();
</script>

<ModeWatcher defaultMode="light" />

<Navbar />

<main class="min-h-svh">
	<slot />
</main>

<Footer />
