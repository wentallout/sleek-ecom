<script lang="ts">
	export let score: number;
	export let title: string;
	export let content: string;
	export let date: string = '17 days ago';
</script>

<div class="border-b border-solid border-border py-6">
	<div class="mb-4 flex flex-row justify-between">
		<div class="">{score}</div>
		<div class="text-sm font-normal">{date}</div>
	</div>
	<div class="mb-2 text-base font-semibold">{title}</div>
	<div class="text-base">{content}</div>
</div>
