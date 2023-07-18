<script>
	// @ts-nocheck

	import DynamicComponent from './DynamicEditComponent.svelte';
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
	class="group flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-transparent transition duration-300 ease-in-out hover:bg-slate-100 hover:border-gray-100 rounded-lg"
>
	<div
		class="w-full h-6 bg-slate-400 flex justify-end gap-1 transition-opacity duration-300 ease-in-out rounded-t-lg opacity-0 group-hover:opacity-100"
	>
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
	<DynamicComponent
		{componentData}
		{addElementAt}
		componentIndex={index}
		{collections}
		{templates}
		selected={selectedComponent}
	/>
	<ElementList {addElementAt} index={index + 1} {templates} />
</div>
