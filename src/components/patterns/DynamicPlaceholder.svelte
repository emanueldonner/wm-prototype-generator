<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import InteractiveComponent from './InteractiveComponent.svelte';
	import TextComponent from './TextComponent.svelte';
	export let componentData = {};
	export let addElementAt = () => {};
	export let componentIndex = 0;
	export let collections;
	export let templates;

	// This will be triggered whenever componentData changes.
	$: key = componentData;

	let isComponentDefined = false;

	const isWebComponent = (component) => {
		return component.startsWith('wm-');
	};
</script>

{#key key}
	{#if componentData.children}
		<svelte:element
			this={isWebComponent(componentData.component) ? 'div' : componentData.component}
			{...componentData.props}
			class={isWebComponent(componentData.component) ? componentData.component : ''}
		>
			{#each componentData.children as child, index (index)}
				{#if child.component === 'text'}
					<TextComponent key={index} content={child.content} />
				{:else if child.component && isWebComponent(child.component)}
					<InteractiveComponent
						key={index}
						componentData={child}
						{addElementAt}
						index={componentIndex}
						{collections}
						{templates}
					/>
				{:else if child.component}
					<svelte:self key={index} componentData={child} />
				{:else}
					<div key={index}>{child}</div>
				{/if}
			{/each}
		</svelte:element>
	{/if}
{/key}
