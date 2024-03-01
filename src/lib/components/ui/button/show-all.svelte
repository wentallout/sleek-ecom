<script lang="ts">
	export let text: string = 'Show All';
	export let url: string = '';
	import CaretRight from '~icons/ph/caret-right';
</script>

<a class="flex flex-row items-center gap-2 text-base font-semibold" href={url}>
	{text}
	<CaretRight />
</a>
