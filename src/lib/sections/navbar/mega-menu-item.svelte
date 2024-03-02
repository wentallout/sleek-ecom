<script lang="ts">
	export let href: string = '';
</script>

<a {href} class="no-wrap flex flex-row gap-3 py-1">
	<slot />
</a>
