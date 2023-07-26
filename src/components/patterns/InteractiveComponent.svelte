<script>
	// @ts-nocheck

	import DynamicComponent from './DynamicPlaceholder.svelte';
	import DynamicPlaceholder from './DynamicPlaceholder.svelte';
	import ElementList from './ElementList.svelte';
	import IconDelete from '~icons/mdi/delete-outline';
	import IconEdit from '~icons/mdi/edit';
	import { selectedComponent, showConfigSidebar } from '../../stores.js';

	export let componentData = {};
	export let deleteElementAt = () => {};
	export let addElementAt = () => {};
	export let index = 0;
	export let templates;
	export let collections;
</script>

<div
	class="{componentData === 'Row' &&
		'row'} group flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-transparent transition duration-300 ease-in-out hover:bg-slate-100 hover:border-gray-200 rounded-lg"
>
	<div
		class="w-full h-6 bg-slate-400 transition-opacity duration-300 ease-in-out flex justify-between rounded-t-lg opacity-0 group-hover:opacity-100"
	>
		<span class=" text-gray-200 ml-1">{componentData.component}</span>
		<div class=" flex justify-end gap-1 rounded-t-lg opacity-0 group-hover:opacity-100">
			<button
				class="bg-transparent transition duration-300 ease-in-out transform opacity-50 hover:scale-110 hover:opacity-100"
				on:click={() => {
					deleteElementAt(index);
				}}
			>
				<IconDelete />
			</button>
			<button
				class="bg-transparent transition duration-300 ease-in-out transform rounded-tr-lg opacity-50 hover:scale-110 hover:opacity-100"
				on:click={() => {
					showConfigSidebar.set(true);
					selectedComponent.set(componentData);
				}}
			>
				<IconEdit />
			</button>
		</div>
	</div>
	{#if componentData.component === 'Row' || componentData.component === 'Column'}
		{#each componentData.children as child, i (child.id)}
			<svelte:self
				key={child.id}
				componentData={child}
				{deleteElementAt}
				{addElementAt}
				index={i}
				{collections}
				{templates}
			/>
		{/each}
	{:else}
		<DynamicComponent
			{componentData}
			{addElementAt}
			componentIndex={index}
			{collections}
			{templates}
			selected={selectedComponent}
		/>
	{/if}
	<ElementList {addElementAt} index={index + 1} {templates} />
</div>

<style>
	.row {
		display: flex;
	}
</style>
