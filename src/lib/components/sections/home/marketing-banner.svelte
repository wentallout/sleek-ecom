<script>
	import banner1 from '$lib/images/banner1.jpg';

	import { ArrowRight } from '$lib/icons/icons.ts';
</script>

<section class="mb-24 w-full overflow-hidden bg-slate-200">
	<div class="g-container grid grid-cols-1 grid-rows-1 md:grid-cols-2">
		<div class="py-9">
			<h3 class="text-4xl font-semibold">Insert marketing message</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor
				sit amet consectetur.
			</p>
			<a href="/" class="flex flex-row items-center gap-4">
				Shop Now
				<ArrowRight />
			</a>
		</div>
		<img src={banner1} class="h-[260px] w-full object-cover" alt="" />
	</div>
</section>
