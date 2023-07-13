<script>
	// @ts-nocheck

	import { derived } from 'svelte/store';
	import _ from 'lodash';
	import { flip } from 'svelte/animate';
	import { v4 as uuidv4 } from 'uuid';
	import { dndzone } from 'svelte-dnd-action';
	import ElementList from './patterns/ElementList.svelte';
	import { templateStore, collectionStore } from './patterns/patternStore.js';
	import { canvasElements } from '../stores.js';

	import InteractiveComponent from './patterns/InteractiveComponent.svelte';

	// let accordionData = derived(templateStore, ($templateStore) => $templateStore.accordionData);
	// let cardData = derived(templateStore, ($templateStore) => $templateStore.cardData);
	let templates = derived(templateStore, ($templateStore) => Object.keys($templateStore));
	let collections = derived(collectionStore, ($collectionStore) => Object.keys($collectionStore));
	let showElementList = false;

	$: console.log('canvasElements:', $canvasElements);

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
					{addElementAt}
					{index}
					{collections}
					{templates}
				/>
			</div>
		{/each}
	</section>
</div>
