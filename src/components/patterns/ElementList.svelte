<script>
	// @ts-nocheck
	import IconAdd from '~icons/mdi/add-bold';
	export let addElementAt;
	export let templates;
	export let collections;
	export let index;
	let showElementList = false;
	$: active_class = showElementList ? 'rotate-45' : '';
</script>

<div
	class="flex flex-col gap-2 items-center justify-center m-2"
	class:variant-filled-secondary={showElementList}
>
	<button
		class="btn-icon variant-filled-success self-center transition duration-300 ease-in-out transform opacity-50 hover:scale-110 hover:opacity-100 {active_class}"
		on:click={() => (showElementList = !showElementList)}
	>
		<IconAdd />
	</button>
	{#if showElementList}
		<div class="grid grid-cols-2 gap-0.5">
			{#if $collections}
				{#each $collections as collection}
					<button
						on:click={() => {
							addElementAt('collection', collection, index);
							showElementList = false;
						}}
					>
						{collection.charAt(0).toUpperCase() + collection.slice(1).replace('Data', '')}
					</button>
				{/each}
			{/if}
			{#if $templates}
				{#each $templates as template}
					<button
						on:click={() => {
							addElementAt('template', template, index);
							showElementList = false;
						}}
					>
						{template.charAt(0).toUpperCase() + template.slice(1).replace('Data', '')}
					</button>
				{/each}
			{/if}
		</div>
	{/if}
</div>
