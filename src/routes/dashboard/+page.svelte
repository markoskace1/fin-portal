<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	export let data;

	let user = data.session?.user.email;
</script>

<h1>Dashboard</h1>
<p>Hello, {user}</p>
<form method="post" use:enhance>
	<Button type="submit">Sign Out</Button>
</form>
