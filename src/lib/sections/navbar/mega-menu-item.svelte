<script lang="ts">
	export let href: string = '';
</script>

<a
	{href}
	class="no-wrap flex flex-row items-center gap-3 rounded-md px-2 py-1 text-base transition-all hover:bg-primary dark:hover:text-primary-foreground">
	<slot />
</a>
