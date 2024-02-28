<script lang="ts">
	import ThemeDropdown from '$lib/components/ui/theme/theme-dropdown.svelte';
	import Footer from '$lib/components/sections/footer/footer.svelte';
	import Navbar from '$lib/components/sections/navbar/navbar.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<!-- <ModeWatcher />
<ThemeDropdown /> -->
<Navbar />

<main class="min-h-svh">
	<slot />
</main>

<Footer />
