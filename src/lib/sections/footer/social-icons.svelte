<script lang="ts">
	import { SOCIAL_FB_URL, SOCIAL_INSTA_URL, SOCIAL_X_URL } from '$lib/constants';

	// import fb from '$lib/icons/social/fb.svg';
	// import insta from '$lib/icons/social/insta.svg';

	import X from '$icons/social/x.svelte';

	import Fb from '$icons/social/fb.svelte';

	import Instagram from '$icons/social/insta.svelte';
</script>

<div class="mb-4 flex flex-row flex-wrap gap-4">
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_FB_URL}>
		<Fb />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_INSTA_URL}>
		<Instagram />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_X_URL}>
		<!-- <svg inline-src="social/x" width="24" height="24" class="fill-foreground" /> -->
		<X />
	</a>
</div>
