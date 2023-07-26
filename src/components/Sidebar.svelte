<script>
	// @ts-nocheck

	import { siteName, defaultComponentStore } from '../stores.js';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { flip } from 'svelte/animate';
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import Pattern from './Pattern.svelte';
	import { canvasElements } from '../stores.js';
	import { writable } from 'svelte/store';
	import { templateStore } from './patterns/patternStore';

	// Initialize items as a writable store
	let items = writable([]);

	// Update items whenever templateStore changes
	templateStore.subscribe(($templateStore) => {
		items.set(
			Object.keys($templateStore).map((key) => ({
				id: key,
				component: key,
				...$templateStore[key]
			}))
		);
	});
	// let items = $defaultComponentStore;
	let shouldIgnoreDndEvents = false;
	const flipDurationMs = 100;

	function handleDndConsider(e) {
		const { trigger, id } = e.detail.info;
		if (trigger === TRIGGERS.DRAG_STARTED) {
			console.log(`copying ${id}`);
			const idx = $items.findIndex((item) => item.id === id);
			const newId = `${id}_copy_${Math.round(Math.random() * 100000)}`;
			// the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
			e.detail.items = e.detail.items.filter((item) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
			e.detail.items.splice(idx, 0, { ...items[idx], id: newId });
			items.update(() => e.detail.items);
			shouldIgnoreDndEvents = true;
		} else if (!shouldIgnoreDndEvents) {
			items.update(() => e.detail.items);
		} else {
			items.update(() => [...$items]);
		}
	}
	function handleDndFinalize(e) {
		const item = e.detail.items[0]; // the dragged pattern

		// add a unique id to the item
		item.id = `${item.id}_copy_${Math.round(Math.random() * 100000)}`;

		// add the dragged pattern to the canvas
		canvasElements.update((elements) => {
			elements.push(item.data);
			return elements;
		});

		// reset the items array to make the pattern draggable again
		items.update(() => e.detail.items);
	}
</script>

<div class=" h-full overflow-scroll">
	<div class="p-4">
		<div class="text-xl font-bold">Site Name</div>
		<input
			type="text"
			id="site-name"
			name="site-name"
			bind:value={$siteName}
			placeholder="Site Name"
			class="bg-slate-200 mt-2"
		/>
	</div>
	<div>
		<Accordion>
			<AccordionItem open>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">Pattern</svelte:fragment>
				<svelte:fragment slot="content">
					<div
						use:dndzone={{ items: $items, flipDurationMs }}
						on:consider={handleDndConsider}
						on:finalize={handleDndFinalize}
						class="grid grid-cols-2 gap-0.5 [&>.logo-item]:variant-filled-secondary"
					>
						{#each $items as item (item.id)}
							<div animate:flip={{ duration: flipDurationMs }}>
								<Pattern {item} itemName={item.component} />
							</div>
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>
