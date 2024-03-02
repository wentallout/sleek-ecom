<script lang="ts">
	import { SOCIAL_FB_URL, SOCIAL_INSTA_URL, SOCIAL_X_URL } from '$lib/constants';

	// import fb from '$lib/icons/social/fb.svg';
	// import insta from '$lib/icons/social/insta.svg';

	// import x from '$lib/icons/social/x.svg';
</script>

<div class="mb-4 flex flex-row flex-wrap gap-4">
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_FB_URL}>
		<svg inline-src="social/fb" />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_INSTA_URL}>
		<svg inline-src="social/insta" />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_X_URL}>
		<svg inline-src="social/x" class="fill-foreground" />
	</a>
</div>
