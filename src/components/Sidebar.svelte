<script>
	// @ts-nocheck

	import { siteName, defaultComponentStore } from '../stores.js';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { flip } from 'svelte/animate';
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import Pattern from './Pattern.svelte';

	let items = $defaultComponentStore;
	let shouldIgnoreDndEvents = false;
	const flipDurationMs = 100;

	function handleDndConsider(e) {
		console.warn(`got consider ${JSON.stringify(e.detail, null, 2)}`);
		const { trigger, id } = e.detail.info;
		if (trigger === TRIGGERS.DRAG_STARTED) {
			console.warn(`copying ${id}`);
			const idx = items.findIndex((item) => item.id === id);
			const newId = `${id}_copy_${Math.round(Math.random() * 100000)}`;
			// the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
			e.detail.items = e.detail.items.filter((item) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME]);
			e.detail.items.splice(idx, 0, { ...items[idx], id: newId });
			items = e.detail.items;
			shouldIgnoreDndEvents = true;
		} else if (!shouldIgnoreDndEvents) {
			items = e.detail.items;
		} else {
			items = [...items];
		}
	}
	function handleDndFinalize(e) {
		console.warn(`got finalize ${JSON.stringify(e.detail, null, 2)}`);
		// if (!shouldIgnoreDndEvents) {
		items = e.detail.items;
		// } else {
		// 	items = [...items];
		// 	shouldIgnoreDndEvents = false;
		// }
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
	<hr class="!border-dashed !border-t-1 mb-4" />
	<div>
		<Accordion>
			<AccordionItem open>
				<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
				<svelte:fragment slot="summary">Pattern</svelte:fragment>
				<svelte:fragment slot="content">
					<div
						use:dndzone={{ items, flipDurationMs }}
						on:consider={handleDndConsider}
						on:finalize={handleDndFinalize}
						class="grid grid-cols-2 gap-0.5 [&>.logo-item]:variant-filled-secondary"
					>
						{#each items as component (component.name)}
							<div animate:flip={{ duration: flipDurationMs }}>
								<Pattern {component} />
							</div>
						{/each}
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>
