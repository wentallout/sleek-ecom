<script lang="ts">
	import { page } from '$app/stores';
	import { CaretRight } from '$icons';
	import { onMount } from 'svelte';

	let currentPath = $page.url.pathname;
	let crumbs;

	function removeHyphens(text: string) {
		// This line removes all hyphens and replaces them with spaces
		return text.replace(/-/g, ' ');
	}

	$: {
		// Remove zero-length tokens.
		let tokens = currentPath.split('/').filter((t) => t !== '');

		// Create { label, href } pairs for each token.
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

	let breadcrumbEl: HTMLElement;
</script>

<nav
	class="container mb-8 flex flex-row items-center gap-2 text-base"
	bind:this={breadcrumbEl}
	aria-label="breadcrumb">
	{#each crumbs as crumb, i}
		{#if i == crumbs.length - 1}
			<div class="breadcrumb__unclickable text-muted-foreground">
				{crumb.label}
			</div>
		{:else}
			<a
				class="breadcrumb__clickable link font-semibold hover:text-primary-foreground"
				href={crumb.href}>{crumb.label}</a>
			<CaretRight width="16" height="16" />
		{/if}
	{/each}
</nav>

<style>
	.breadcrumb__unclickable {
		pointer-events: none;
		display: inline-block;
		font-weight: var(--fontWeightXS);
	}

	.breadcrumb__clickable {
		font-weight: var(--fontWeightXS);
		display: inline-flex;
	}

	.breadcrumb__clickable:hover {
		color: var(--colorPrimaryHover);
		text-underline-offset: 2px;
	}

	:global(.breadcrumb.sticky) {
		background-color: var(--colorBgLayout);
		padding: var(--space2XS) var(--spaceXS);
		box-shadow: var(--boxShadow);
		z-index: 99999;
		border-radius: 0 0 var(--borderRadiusLight) var(--borderRadiusLight);
	}
</style>
