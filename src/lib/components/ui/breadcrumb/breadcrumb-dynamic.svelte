<script lang="ts">
	export let path: string;

	import * as Breadcrumb from '$lib/components/ui/breadcrumb';

	let crumbs: Array<{ label: string; href: string }> = [];

	$: {
		if (path) {
			// Remove zero-length tokens.
			const tokens = path.split('/').filter((t) => t !== '');

			// Create { label, href } pairs for each token.
			let tokenPath = '';
			crumbs = tokens.map((t) => {
				tokenPath += '/' + t;
				t = t.charAt(0).toUpperCase() + t.slice(1);
				return { label: t, href: tokenPath };
			});

			// Add a way to get home too.
			crumbs.unshift({ label: 'Home', href: '/' });
		}
	}
</script>

<Breadcrumb.Root class="container mb-8">
	{#if crumbs.length !== 1}
		<Breadcrumb.List>
			{#each crumbs as c, i}
				{#if i == crumbs.length - 1}
					<Breadcrumb.Item class="font-semibold text-primary">
						{c.label}
					</Breadcrumb.Item>
				{:else}
					<Breadcrumb.Item>
						<Breadcrumb.Link href={c.href}>{c.label}</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
				{/if}
			{/each}
		</Breadcrumb.List>
	{/if}
</Breadcrumb.Root>
