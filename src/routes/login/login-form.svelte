<script lang="ts">
	import Button from '$components/ui/button/button.svelte';
	import Separator from '$components/ui/separator/separator.svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { loginFormSchema, type LoginFormSchema } from '$types/schema';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: SuperValidated<Infer<LoginFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(loginFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

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

	<Form.Button>Login</Form.Button>

	<a href="/signup">Don't have an account? Sign up</a>

	<Separator class="my-7" />

	<div class="flex flex-col gap-2">
		<Button variant="secondary">Continue with Google</Button>
		<Button variant="secondary">Continue with Facebook</Button>
		<Button variant="secondary">Continue with Instagram</Button>
	</div>
</form>
