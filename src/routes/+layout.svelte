<script lang="ts">
	import Footer from '$sections/footer/footer.svelte';
	import Navbar from '$sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	import Marquee from '$components/ui/marquee/marquee.svelte';

	import * as Drawer from '$components/ui/drawer';
	import Breadcrumb from '$components/ui/breadcrumb/dynamic-breadcrumb.svelte';
</script>

<Drawer.Root direction="right">
	<ModeWatcher defaultMode="system" />

	<Navbar />
	<Breadcrumb />

	<main class="min-h-svh">
		<slot />
	</main>
	<Marquee />
	<Footer />
</Drawer.Root>
