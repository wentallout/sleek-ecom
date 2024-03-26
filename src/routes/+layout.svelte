<script lang="ts">
	import Footer from '$sections/footer/footer.svelte';
	import Navbar from '$sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';

	

	import * as Drawer from '$components/ui/drawer';
	import DynamicBreadcrumb from '$components/ui/breadcrumb/breadcrumb-dynamic.svelte';

	import { page } from '$app/stores';
</script>

<Drawer.Root direction="right">
	<ModeWatcher defaultMode="system" />

	<Navbar />
	<DynamicBreadcrumb path={$page.url.pathname} />

	<main class="min-h-svh">
		<slot />
	</main>

	<Footer />
</Drawer.Root>
