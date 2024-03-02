<script lang="ts">
	import banner1 from '$images/banner1.webp';

	import { ArrowRight } from '$icons';
</script>

<section class="mb-32 w-full overflow-hidden">
	<div class="g-container grid grid-cols-1 grid-rows-1 md:grid-cols-2">
		<div class="py-14">
			<h3 class="mb-6 text-4xl font-semibold">Insert marketing message</h3>
			<p class="mb-4 max-w-prose text-balance">
				Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor
				sit amet consectetur.
			</p>
			<a href="/" class="flex flex-row items-center gap-4 font-semibold">
				Shop Now
				<ArrowRight />
			</a>
		</div>
		<img src={banner1} class="h-[300px] w-full object-cover" alt="" />
	</div>
</section>
