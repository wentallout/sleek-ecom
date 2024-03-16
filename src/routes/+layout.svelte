<script lang="ts">
	import Footer from '$sections/footer/footer.svelte';
	import Navbar from '$sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Marquee from '$components/ui/marquee/marquee.svelte';
	injectSpeedInsights();

	import * as Drawer from '$components/ui/drawer';
	import Breadcrumb from '$components/ui/breadcrumb/breadcrumb.svelte';
</script>

<Drawer.Root direction="right">
	<ModeWatcher defaultMode="system" />

	<Navbar />

	<main class="min-h-svh">
		<slot />
	</main>
	<Marquee />
	<Footer />
</Drawer.Root>
