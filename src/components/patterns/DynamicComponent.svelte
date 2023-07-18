<script>
	// @ts-nocheck
	import TextComponent from './TextComponent.svelte';
	export let componentData = {};

	$: key = componentData;
</script>

{#key key}
	{#if componentData.children}
		<svelte:element this={componentData.component} class="w-full h-full" {...componentData.props}>
			{#each componentData.children as child, index (index)}
				{#if child.component === 'text'}
					<TextComponent key={index} content={child.content} />
				{:else if child.component}
					<svelte:self key={index} componentData={child} />
				{:else}
					<div key={index}>{child}</div>
				{/if}
			{/each}
		</svelte:element>
	{/if}
{/key}
