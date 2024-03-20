<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	// import * as Drawer from '$lib/components/ui/drawer/index.js';
	// import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	// import { Button } from '$lib/components/ui/button/index.js';

	import type { BreadcrumbItem } from '$lib/types/BreadcrumbItem';
	import { page } from '$app/stores';

	let currentPath = $page.url.pathname;
	let crumbs: BreadcrumbItem[];

	function removeHyphens(text: string) {
		return text.replace(/-/g, ' ');
	}

	$: {
		let tokens = currentPath.split('/').filter((t) => t !== '');

		let tokenPath = '';
		crumbs = tokens.map((t) => {
			tokenPath += '/' + t;
			return {
				label: removeHyphens(t),
				href: tokenPath
			};
		});

		crumbs.unshift({ label: 'home', href: '/' });
	}
</script>

<nav class="container mb-8" aria-label="breadcrumb">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			{#each crumbs as c, i}
				{#if i === crumbs.length - 1}
					<Breadcrumb.Item>
						<Breadcrumb.Link href={c.href}>
							{c.label}
						</Breadcrumb.Link>
					</Breadcrumb.Item>
				{:else}
					<Breadcrumb.Item>
						<Breadcrumb.Link href={c.href}>
							{c.label}
						</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
				{/if}
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
</nav>
