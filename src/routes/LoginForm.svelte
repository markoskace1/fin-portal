<script lang="ts">
	export let data: SuperValidated<Infer<FormSchema>>;
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import * as Form from '$lib/components/ui/form';

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance, constraints } = form;
</script>

<form method="POST" use:enhance>
	<div class="flex flex-col gap-3">
		<Form.Field {form} name="username">
			<Form.Control let:attrs>
				<Form.Label>Uporabniško ime</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.username}
					type="text"
					required
					{...$constraints.username}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>Geslo</Form.Label>
				<Input
					{...attrs}
					bind:value={$formData.password}
					type="password"
					required
					{...$constraints.password}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button type="submit" class="mt-4 w-fit">Prijava</Form.Button>
	</div>
</form>
