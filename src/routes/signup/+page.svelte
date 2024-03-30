<script lang="ts">
	import Button from '$components/ui/button/button.svelte';
	import Separator from '$components/ui/separator/separator.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { signUpFormSchema, type SignUpFormSchema } from '$types/schema';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<SignUpFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(signUpFormSchema),
		dataType: 'json'
	});

	const { form: formData, enhance } = form;
</script>

<div class="container max-w-[640px]">
	<form class="flex flex-col gap-3" method="POST" use:enhance>
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>Email</Form.Label>
				<Input {...attrs} bind:value={$formData.email} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input type="password" {...attrs} bind:value={$formData.password} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="confirmPassword">
			<Form.Control let:attrs>
				<Form.Label>Confirm password</Form.Label>
				<Input type="password" {...attrs} bind:value={$formData.confirmPassword} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button>Sign Up</Form.Button>

		<Separator class="my-7" />

		<div class="flex flex-col gap-2">
			<Button variant="secondary">Continue with Google</Button>
			<Button variant="secondary">Continue with Facebook</Button>
			<Button variant="secondary">Continue with Instagram</Button>
		</div>
	</form>
</div>
