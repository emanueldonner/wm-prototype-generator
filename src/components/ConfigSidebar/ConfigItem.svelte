<script>
	// @ts-nocheck

	// @ts-ignore
	export let component;
	export let updateStore;
	export let path = '';
	// console.log('updateStore function:', path);
	import { defaultComponentStore, canvasElements } from '../../stores.js';
	function updateChild(key, value) {
		// console.log('updateChild called with key:', key, 'and value:', value);
		updateStore(`${path}${key}`, value);
	}
	let yes = false;
	// Get the editablePropsAndAttributes for the component
	let editablePropsAndAttributes = $defaultComponentStore.find(
		(c) => c.tag === component.component
	)?.editablePropsAndAttributes;

	let editableVariables = $defaultComponentStore.find(
		(c) => c.tag === component.component
	)?.editableVariables;

	function updateValue(key, value) {
		// Now update the component store
		canvasElements.update((store) => {
			// Find the component in the store
			const componentIndex = store.findIndex((c) => c.tag === component.component);
			if (componentIndex !== -1) {
				// Add the variable to the component if it doesn't already exist
				if (!store[componentIndex].editableVariables[key]) {
					store[componentIndex].editableVariables[key] = {};
				}
				// Update the variable in the component
				store[componentIndex].editableVariables[key].$value = value;
			}
			return store;
		});
	}
</script>

<!-- <h2>{component.component}</h2> -->
<!-- <input type="checkbox" /> -->

{#if defaultComponentStore && component.props && editablePropsAndAttributes}
	{#each Object.keys(component.props) as key (key)}
		{#if editablePropsAndAttributes.includes(key)}
			{#if component.props[key] !== undefined && (typeof component.props[key] === 'boolean' || component.props[key] === 'true' || component.props[key] === 'false')}
				<div>
					<input
						type="checkbox"
						id={key}
						bind:checked={component.props[key]}
						on:change={(e) => updateChild(`props.${key}`, e.target.checked ? true : false)}
					/>
					<label for={key}>
						{key}
						{component.props[key]}
					</label>
				</div>
			{:else}
				<div>
					<input
						type="text"
						bind:value={component.props[key]}
						on:input={(e) => {
							updateChild(`props.${key}`, e.target.value);
						}}
					/>
				</div>
			{/if}
		{/if}
	{/each}
{/if}

{#if component.content}
	<div>
		Content
		<textarea
			bind:value={component.content}
			on:input={(e) => {
				updateChild('content', e.target.value);
			}}
		/>
	</div>
{/if}
{#if component.children}
	{#each component.children as child, index (index)}
		<!-- <h3>Child {index + 1}</h3> -->
		<svelte:self {updateStore} component={child} path={`${path}children.${index}.`} on:* />
	{/each}
{/if}

{#if editableVariables}
	{#each Object.entries(editableVariables) as [key, value]}
		<label for={key}>
			{value.name}
		</label>
		{#if value.type === 'color'}
			<input
				id={key}
				type="color"
				bind:value={value.$value}
				on:input={(e) => updateValue(key, e.target.value)}
			/>
		{:else if value.type === 'text'}
			<input
				id={key}
				type="text"
				bind:value={value.$value}
				on:input={(e) => updateValue(key, e.target.value)}
			/>
		{/if}
	{/each}
{/if}
