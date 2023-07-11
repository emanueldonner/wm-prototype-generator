<script>
	// @ts-nocheck
	import TextComponent from './TextComponent.svelte';
	export let componentData = {};
	// This will be triggered whenever componentData changes.
	$: key = componentData;
</script>

{#key key}
	<svelte:element this={componentData.component} class="dynamic-component" {...componentData.props}>
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
{/key}
