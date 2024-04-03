<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import LoginForm from './LoginForm.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import { LineChart, LogIn } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';
	import { buttonVariants } from '$lib/components/ui/button';
	import Bull from '$lib/images/bull2.png';
	import Bear from '$lib/images/bear2.png';

	export let data: PageData;

	let firstLoad: boolean = false;

	onMount(async () => {
		firstLoad = true;
	});
</script>

<main
	class="relative flex flex-col w-full h-screen justify-center items-center gap-6 overflow-hidden"
>
	<div class="flex flex-row text-primary items-center gap-3">
		<LineChart strokeWidth={1.2} size={64} />

		<h1 class="font-light">BM investicije</h1>
	</div>

	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'default' })}>Prijava v portal</Dialog.Trigger>
		<Dialog.Content class="max-w-md">
			<Dialog.Header class="flex flex-col justify-center items-center py-6">
				<Dialog.Title class="flex items-center gap-2 text-3xl uppercase text-primary"
					><LogIn strokeWidth={3} size={32} />finančni portal</Dialog.Title
				>
				<Dialog.Description>Vpogled v stanje vašega portfelja</Dialog.Description>
			</Dialog.Header>
			<LoginForm data={data.form} />
		</Dialog.Content>
	</Dialog.Root>

	{#if firstLoad}
		<div class="absolute flex justify-between h-full w-full -z-50">
			<img
				transition:fly={{ x: -500, duration: 1200, easing: quadInOut }}
				src={Bull}
				alt="bull"
				class=" object-cover"
			/>
			<img
				transition:fly={{ x: 500, duration: 1200, easing: quadInOut }}
				src={Bear}
				alt="bear"
				class=" object-cover"
			/>
		</div>
	{/if}
</main>
