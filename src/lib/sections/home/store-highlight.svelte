<script>
	import { LockKey, Truck } from '$icons';
</script>

<section class="container mb-24">
	<div class="grid grid-cols-12 gap-8">
		<div
			class="col-span-6 flex flex-row items-center gap-4 text-pretty rounded-md border border-solid border-border px-3 py-4 md:col-span-4">
			<Truck width="40" height="40" />

			<h4 class="max-w-[30ch] text-base">Free delivery when you spend over $50</h4>
		</div>
		<div
			class="col-span-6 flex flex-row items-center gap-4 text-pretty rounded-md border border-solid border-border px-3 py-4 md:col-span-4">
			<LockKey width="40" height="40" />
			<h4 class="max-w-[30ch] text-base">Secure payments managed by Stripe</h4>
		</div>
		<div
			class="col-span-6 flex flex-row items-center gap-4 text-pretty rounded-md border border-solid border-border px-3 py-4 md:col-span-4">
			<LockKey width="40" height="40" />
			<h4 class="max-w-[30ch] text-base">Free delivery when you spend over $50</h4>
		</div>
	</div>
</section>
