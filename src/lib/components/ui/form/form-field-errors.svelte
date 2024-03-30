<script lang="ts">
	import * as FormPrimitive from 'formsnap';
	import { cn } from '$lib/utils.js';

	type $$Props = FormPrimitive.FieldErrorsProps & {
		errorClasses?: string | undefined | null;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let errorClasses: $$Props['class'] = 'flex flex-row gap-1 items-start';

	import { Warning } from '$icons';
</script>

<FormPrimitive.FieldErrors
	class={cn('flex flex-col gap-2 text-sm font-medium text-destructive', className)}
	{...$$restProps}
	let:errors
	let:fieldErrorsAttrs
	let:errorAttrs>
	<slot {errors} {fieldErrorsAttrs} {errorAttrs}>
		{#each errors as error}
			<div {...errorAttrs} class={cn(errorClasses)}>
				<Warning class="aspect-square h-5 w-5 flex-shrink-0 flex-grow-0" />
				<p>
					{error}
				</p>
			</div>
		{/each}
	</slot>
</FormPrimitive.FieldErrors>
