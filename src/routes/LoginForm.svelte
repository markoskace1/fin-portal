<script lang="ts">
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { formSchema, type FormSchema } from '$lib/schema';
	import * as Form from '$lib/components/ui/form';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, constraints, errors, message } = form;
</script>

<form method="POST" use:enhance>
	<div class="flex flex-col gap-3">
		<Form.Field {form} name="email">
			<Form.Control let:attrs>
				<Form.Label>E-mail</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.email}
					type="email"
					required
					autocomplete="email"
					{...$constraints.email}
				/>
			</Form.Control>
			{#if $errors.email}
				<Form.FieldErrors {...$errors.email} />
			{/if}
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Password</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.password}
					type="password"
					required
					{...$constraints.password}
				/>
			</Form.Control>
			{#if $errors.password}
				<Form.FieldErrors {...$errors.password} />
			{/if}
		</Form.Field>

		{#if $message}
			<small class="text-destructive">{$message}</small>
		{/if}
		<Form.Button type="submit" class="mt-4 gap-2 w-fit">Login</Form.Button>
	</div>
</form>
