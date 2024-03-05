<script>
	export let items = [
		'Free delivery for orders above $50',
		'Ship Worldwide',
		'All shoes are %50 off',
		'Secured payment with Stripe',
		'Happy Earth Day'
	];
</script>

<div class="relative h-9 max-w-[100vw] overflow-hidden text-base">
	<div class="marquee">
		<ul class="marquee__content overflow-hidden">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>

		<ul class="marquee__content overflow-hidden" aria-hidden="true">
			{#each items as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.marquee {
		position: relative;
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 24px;
		color: var(--colorText);
		padding: var(--spaceXS) 0;
	}

	.marquee__content {
		flex-shrink: 0;
		display: flex;
		justify-content: space-around;
		gap: 24px;
		animation: scroll 20s linear infinite;
		animation-direction: reverse;
	}

	.marquee:hover .marquee__content {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 24px));
		}
	}
</style>
