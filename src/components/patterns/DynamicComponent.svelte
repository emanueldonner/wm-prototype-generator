<script>
	// @ts-nocheck
	import TextComponent from './TextComponent.svelte';
	export let componentData = {};
	// Map of component names to HTML tags
	const tagMap = {
		'wm-accordion': 'div',
		'wm-card': 'div',
		'wm-cta': 'div',
		h3: 'h3',
		div: 'div',
		p: 'p',
		ul: 'ul',
		li: 'li',
		a: 'a',
		img: 'img'
		// Add more mappings as needed
	};
</script>

<svelte:element
	this={tagMap[componentData.component]}
	class={componentData.component}
	{...componentData.props}
>
	{#each componentData.children as child, index (index)}
		{#if child.component === 'text'}
			{@html child.content}
		{:else if child.component}
			<svelte:self key={index} componentData={child} />
		{:else}
			{child}
		{/if}
	{/each}
</svelte:element>
