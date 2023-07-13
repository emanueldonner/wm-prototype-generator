<script>
	// @ts-nocheck

	import { get, derived } from 'svelte/store';
	import _ from 'lodash';
	import { flip } from 'svelte/animate';
	import { v4 as uuidv4 } from 'uuid';
	import DynamicComponent from './patterns/DynamicEditComponent.svelte';
	import IconEdit from '~icons/mdi/edit';
	import { dndzone } from 'svelte-dnd-action';
	import ElementList from './patterns/ElementList.svelte';
	import { templateStore } from './patterns/patternStore.js';
	import { selectedComponent, canvasElements, showConfigSidebar } from '../stores.js';

	// let accordionData = derived(templateStore, ($templateStore) => $templateStore.accordionData);
	// let cardData = derived(templateStore, ($templateStore) => $templateStore.cardData);
	let templates = derived(templateStore, ($templateStore) => Object.keys($templateStore));
	let showElementList = false;

	function addElementAt(templateName, index) {
		// Generate a random ID for the new element.
		console.log('addElementAt:', templateName, index);
		const id = uuidv4();
		let actElement = $templateStore[templateName];
		console.log('actElement:', actElement);
		let newElement = _.cloneDeep(actElement);
		canvasElements.update((elements) => {
			let newElements = [...elements];
			newElements.splice(index, 0, { ...newElement, id });
			return newElements;
		});
		showElementList = false;
	}

	// This function will be called whenever the order of items changes due to drag and drop

	function handleDndConsider(e) {
		$canvasElements = e.detail.items;
	}
	function handleDndFinalize(e) {
		$canvasElements = e.detail.items;
		console.log('canvasElements:', $canvasElements);
	}
	const flipDurationMs = 300;
</script>

<div>
	<ElementList {addElementAt} index={0} {templates} />

	<section
		use:dndzone={{ items: $canvasElements, flipDurationMs }}
		on:consider={handleDndConsider}
		on:finalize={handleDndFinalize}
	>
		{#each $canvasElements as element, index (element.id)}
			<div
				animate:flip={{ duration: flipDurationMs }}
				class="group flex flex-col items-center justify-center w-full h-full border-2 border-dashed border-transparent transition duration-300 ease-in-out hover:bg-slate-100 hover:border-gray-100 rounded-lg"
			>
				<div
					class="w-full h-6 bg-slate-400 flex justify-end transition-opacity duration-300 ease-in-out rounded-t-lg opacity-0 group-hover:opacity-100"
				>
					<button
						class="bg-transparent transition duration-300 ease-in-out transform rounded-tr-lg opacity-50 hover:scale-110 hover:opacity-100"
						on:click={() => {
							showConfigSidebar.set(true);
							selectedComponent.set(element);
						}}
					>
						<IconEdit />
					</button>
				</div>
				<DynamicComponent componentData={element} selected={$selectedComponent} />
				<ElementList {addElementAt} index={index + 1} {templates} />
			</div>
		{/each}
	</section>
</div>
