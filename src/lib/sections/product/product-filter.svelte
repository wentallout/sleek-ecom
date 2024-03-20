<script>
	import * as Select from '$lib/components/ui/select';

	import AppliedProductTag from '$components/ui/tag/applied-product-tag.svelte';
</script>

<section class="mb-4 flex flex-row flex-wrap justify-between gap-2">
	<div class="flex flex-row flex-wrap gap-2">
		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Colors" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Colors</Select.Label>
					<Select.Item value="red" label="Red">Red</Select.Item>
					<Select.Item value="blue" label="Blue">Blue</Select.Item>
					<Select.Item value="grey" label="grey">Grey</Select.Item>
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>

		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Size" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Size</Select.Label>
					<Select.Item value="red" label="Red">SM</Select.Item>
					<Select.Item value="blue" label="Blue">MD</Select.Item>
					<Select.Item value="grey" label="grey">LG</Select.Item>
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>

		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Size" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Price</Select.Label>
					<Select.Item value="red" label="Red">Red</Select.Item>
					<Select.Item value="blue" label="Blue">Blue</Select.Item>
					<Select.Item value="grey" label="grey">Grey</Select.Item>
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>
	</div>
	<div class="flex flex-row flex-wrap items-center gap-1">
		<div>Sort by</div>
		<Select.Root portal={null}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Size" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Relevance</Select.Label>
					<Select.Item value="price" label="Price">Price</Select.Item>
					<Select.Item value="blue" label="Blue">Blue</Select.Item>
					<Select.Item value="grey" label="grey">Grey</Select.Item>
				</Select.Group>
			</Select.Content>
			<Select.Input name="relevance" />
		</Select.Root>
	</div>
</section>

<section class="mb-6 flex flex-row flex-wrap justify-start gap-2">
	<AppliedProductTag text="White" />
	<AppliedProductTag text="Beige" />
	<AppliedProductTag text="$10 - $250" />
	<button>Clear all</button>
</section>
