<script>
	// @ts-nocheck

	import { derived } from 'svelte/store';
	import _ from 'lodash';
	import { flip } from 'svelte/animate';
	import { v4 as uuidv4 } from 'uuid';
	import { dndzone } from 'svelte-dnd-action';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import ElementList from './patterns/ElementList.svelte';
	import { templateStore, collectionStore } from './patterns/patternStore.js';
	import { canvasElements, mode, canvasStore } from '../stores.js';
	import Row from './patterns/Row.svelte';
	import InteractiveComponent from './patterns/InteractiveComponent.svelte';
	import DynamicComponent from './patterns/DynamicComponent.svelte';
	import { createRowsAndColumns } from '$lib/helpers';

	// let accordionData = derived(templateStore, ($templateStore) => $templateStore.accordionData);
	// let cardData = derived(templateStore, ($templateStore) => $templateStore.cardData);
	let templates = derived(templateStore, ($templateStore) => Object.keys($templateStore));
	let collections = derived(collectionStore, ($collectionStore) => Object.keys($collectionStore));
	let showElementList = false;

	$: {
		console.log('canvasElements:', $canvasElements);
		canvasStore.update((canvas) => ({ ...canvas, state: $canvasElements }));
	}

	function addElementAt(type, templateName, index) {
		if (type === 'template') {
			addTemplateElement(templateName, index);
		} else if (type === 'collection') {
			addCollectionElement(templateName, index);
		}
	}
	function addTemplateElement(templateName, index) {
		// Generate a random ID for the new element.
		const id = uuidv4();
		let actElement = $templateStore[templateName];
		let newElement = _.cloneDeep(actElement);
		console.log('newElement:', JSON.stringify(newElement, null, 2));
		// Transform the data structure
		newElement = createRowsAndColumns(newElement);
		console.log('newTransformedElement:', JSON.stringify(newElement, null, 2));
		canvasElements.update((elements) => {
			let newElements = [...elements];
			newElements.splice(index, 0, { ...newElement, id });
			return newElements;
		});
		showElementList = false;
	}

	function addCollectionElement(collectionName, index) {
		// addElementsRecursively(actCollection, index);

		// Generate a random ID for the new element.
		const id = uuidv4();
		let actCollection = $collectionStore[collectionName];
		let newElement = _.cloneDeep(actCollection);

		// Transform the data structure
		newElement = createRowsAndColumns(newElement);

		canvasElements.update((elements) => {
			let newElements = [...elements];
			newElements.splice(index, 0, { ...newElement, id });
			return newElements;
		});
		showElementList = false;
	}

	const addElementsRecursively = (component, startIndex) => {
		let newElement = _.cloneDeep(component);
		// console.log('newElement:', newElement);
		// Generate a unique id for each element
		let id = uuidv4();
		if (Array.isArray(newElement.children)) {
			newElement.children = newElement.children.map((child, i) => addElementsRecursively(child, i));
		}
		canvasElements.update((elements) => {
			let newElements = [...elements];
			newElements.splice(startIndex, 0, { ...newElement, id });
			return newElements;
		});
		return newElement; // return the new element for inclusion in the parent's 'children' array
	};

	function deleteElementAt(index) {
		const modal = {
			type: 'confirm',
			// zIndex: 1000,
			// background: 'bg-white',
			title: 'Element löschen?',
			body: 'Soll das Element wirklich gelöscht werden?',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r) => (r ? destroyElement(index) : null)
		};
		modalStore.trigger(modal);
	}

	function destroyElement(index) {
		canvasElements.update((elements) => {
			let newElements = [...elements];
			newElements.splice(index, 1);
			return newElements;
		});
	}

	// This function will be called whenever the order of items changes due to drag and drop
	function handleDndConsider(e) {
		$canvasElements = e.detail.items;
	}
	function handleDndFinalize(e) {
		const item = e.detail.items.find((item) => item.id === e.detail.id); // the dragged pattern

		// find the index where the item was dropped
		const dropPosition = e.detail.items.indexOf(item);

		// remove the item from its original position
		const dataCopy = [...$canvasElements];
		dataCopy.splice(dataCopy.indexOf(item.data), 1);

		// insert the item at the new position
		dataCopy.splice(dropPosition, 0, item.data);

		// update the canvasElements store
		canvasElements.set(dataCopy);
	}
	const flipDurationMs = 300;
</script>

{#if $mode === 'edit'}
	<div>
		<Modal />
		<ElementList {addElementAt} index={0} {templates} {collections} />

		<section
			use:dndzone={{ items: $canvasElements, flipDurationMs }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each $canvasElements as element, index (element.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					<InteractiveComponent
						key={element.id}
						componentData={element}
						{deleteElementAt}
						{addElementAt}
						{index}
						{collections}
						{templates}
					/>
				</div>
			{/each}
		</section>
	</div>{:else}
	{#each $canvasElements as element, index (element.id)}
		<DynamicComponent
			key={element.id}
			componentData={element}
			{addElementAt}
			{index}
			{collections}
			{templates}
		/>
	{/each}
{/if}

<style>
	.modal {
		background-color: aliceblue !important;
	}
</style>
