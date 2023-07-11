<script>
	// @ts-nocheck
	import _ from 'lodash';
	import { get } from 'svelte/store';
	import { onDestroy } from 'svelte';
	import {
		selectedComponent,
		componentKeyMap,
		canvasElements,
		showConfigSidebar
	} from '../../stores.js';
	import ConfigItem from './ConfigItem.svelte';

	let unsubscribe = selectedComponent.subscribe((value) => {
		// console.log('selectedComponent (from subscription):', value);
	});

	$: console.log('canvasElements from config sidebar:', $canvasElements);

	onDestroy(unsubscribe);

	function updateStore(path, value) {
		// console.log('original path:', path);

		// Remove leading dot if it exists
		if (path.charAt(0) === '.') {
			path = path.slice(1);
		}
		// console.log('updated path:', path);

		selectedComponent.update((selected) => {
			// Create a copy of selected
			let newSelected = _.cloneDeep(selected);
			// Update the copy
			_.set(newSelected, path, value);

			return newSelected;
		});

		canvasElements.update((elements) => {
			// Create a copy of elements
			let newElements = _.cloneDeep(elements);

			// Find the index of the element with the same id as the selected component
			let elementIndex = newElements.findIndex((el) => el.id === $selectedComponent.id);

			// Replace the element at the found index with the updated selected component
			if (elementIndex !== -1) {
				newElements[elementIndex] = get(selectedComponent);
			}

			return newElements;
		});

		// console.log('selectedComponent after update:', get(selectedComponent));
	}
</script>

<!-- Display and edit the properties of the selected component -->
{#if $selectedComponent}
	<div class="sidebar">
		<button
			on:click={() => {
				showConfigSidebar.set(false);
			}}
		>
			x
		</button>
		<ConfigItem {updateStore} component={$selectedComponent} />
	</div>
{/if}

<style>
	.sidebar {
		padding: 1rem;
	}
</style>
