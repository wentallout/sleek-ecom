<script lang="ts">
	import Footer from '$sections/footer/footer.svelte';
	import Navbar from '$sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Marquee from '$components/ui/marquee/marquee.svelte';
	injectSpeedInsights();

	import * as Drawer from '$components/ui/drawer';
</script>

<Drawer.Root direction="right">
	<ModeWatcher defaultMode="system" />
	<Marquee />
	<Navbar />

	<main class="min-h-svh">
		<slot />
	</main>

	<Footer />
</Drawer.Root>
