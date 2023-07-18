<script>
	// @ts-nocheck

	import { canvasStore, canvasElements } from '../stores.js';

	let canvas;
	let canvases;
	let showCanvasList = false;
	canvasStore.subscribe((value) => {
		canvas = value;
	});
	let canvasName, canvasId;
	canvasName = canvas.name;
	canvasId = canvas.id;

	async function showAllCanvases() {
		const response = await fetch('/edit?requestType=getAllCanvases');

		if (response.ok) {
			showCanvasList = true;
			canvases = await response.json();
			console.log('Canvases loaded successfully.', canvases);
		} else {
			console.log('Error loading canvases.');
		}
	}

	async function loadCanvas() {
		const response = await fetch(`/edit?requestType=getCanvas&id=${canvasId}`);

		if (response.ok) {
			const { id, name, state } = await response.json();
			console.log('Canvas loaded successfully.', id, name, state);
			canvasId = id;
			canvasName = name;
			canvasStore.update((canvas) => ({ ...canvas, state: JSON.parse(state) }));
			canvasElements.update((elements) => JSON.parse(state));
			showCanvasList = false;
		} else {
			console.log('Error loading canvas.');
		}
	}

	async function saveCurrentState() {
		// If no name is set yet, prompt the user for a name
		if (!canvasName) {
			canvasName = prompt('Please enter a name for the canvas:');
		}
		const response = await fetch('/edit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: canvasId,
				name: canvasName,
				state: JSON.stringify(canvas.state)
			})
		});

		if (response.ok) {
			const { id, name } = await response.json();
			console.log('Canvas saved successfully.', id, name);
			canvasId = id;
		} else {
			console.log('Error saving canvas.');
		}
	}
</script>

<button on:click={saveCurrentState}>Save</button>
<button on:click={showAllCanvases}>Load</button>
<div>
	{#if canvases && showCanvasList}
		{#each canvases as canvas}
			<button
				on:click={() => {
					canvasId = canvas.id;
					loadCanvas();
				}}>{canvas.name}</button
			>
		{/each}
	{/if}
</div>
