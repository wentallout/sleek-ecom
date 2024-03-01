<script lang="ts">
	import { SOCIAL_FB_URL, SOCIAL_INSTA_URL, SOCIAL_X_URL } from '$lib/constants';
</script>

<div class="flex flex-row flex-wrap gap-4">
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_FB_URL}>
		<img src="./src/lib/icons/social/fb.svg" alt="" />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_INSTA_URL}>
		<img src="./src/lib/icons/social/insta.svg" alt="" />
	</a>
	<a
		class="aspect-square rounded-full border border-solid border-neutral-300 p-2"
		href={SOCIAL_X_URL}>
		<img src="./src/lib/icons/social/x.svg" alt="" />
	</a>
</div>
