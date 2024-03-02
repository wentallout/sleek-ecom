<script lang="ts">
	export let href: string = '';
</script>

<a {href} class="no-wrap flex flex-row items-center gap-3 py-1 text-base">
	<slot />
</a>
