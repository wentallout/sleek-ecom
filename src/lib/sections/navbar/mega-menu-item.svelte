<script lang="ts">
	export let href: string = '';
</script>

<a
	{href}
	class="no-wrap flex flex-row items-center gap-3 px-2 py-1 text-base transition-all hover:bg-blue-400 hover:text-background">
	<slot />
</a>
