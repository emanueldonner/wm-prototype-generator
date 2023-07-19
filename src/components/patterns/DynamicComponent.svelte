<script>
	// @ts-nocheck
	import TextComponent from './TextComponent.svelte';
	export let componentData = {};

	$: key = componentData;
</script>

{#key key}
	{#if componentData.children}
		<svelte:element this={componentData.component} class=" w-auto h-auto" {...componentData.props}>
			{#each componentData.children as child, index (index)}
				{#if child.component === 'text'}
					text
					<TextComponent key={index} content={child.content} />
				{:else if child.component}
					self
					<svelte:self key={index} componentData={child} />
				{:else}
					child
					<div key={index}>{child}</div>
				{/if}
			{/each}
		</svelte:element>
	{/if}
{/key}
