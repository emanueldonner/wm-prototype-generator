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

	onMount(async () => {
		if (isWebComponent(componentData.component)) {
			if (!customElements.get(componentData.component)) {
				await customElements.whenDefined(componentData.component);
			}
			isComponentDefined = true;
		} else {
			isComponentDefined = true;
		}
		console.log('isComponentDefined:', isComponentDefined);
	});

	const isWebComponent = (component) => {
		return component.startsWith('wm-');
	};
</script>

{#if isComponentDefined}
	{#key key}
		{#if componentData.children}
			<svelte:element this={componentData.component} {...componentData.props}>
				{#each componentData.children as child, index (index)}
					{#if child.component === 'text'}
						text dyn
						<TextComponent key={index} content={child.content} />
					{:else if child.component && isWebComponent(child.component)}
						inter dyn

						<InteractiveComponent
							key={index}
							componentData={child}
							{addElementAt}
							index={componentIndex}
							{collections}
							{templates}
						/>
						<!-- <svelte:self key={index} componentData={child} /> -->
					{:else if child.component}
						self dyn
						<svelte:self key={index} componentData={child} />
					{:else}
						child dyn
						<div key={index}>{child}</div>
					{/if}
				{/each}
			</svelte:element>
		{/if}
	{/key}
{:else}
	<div>Component not defined.</div>
{/if}
