<script lang="ts">
	export let text: string = 'Show All';
	export let url: string = '';
	import ArrowRight from '~icons/ph/arrow-right';
</script>

<a class="flex flex-row items-center gap-2" href={url}>
	{text}
	<ArrowRight />
</a>
