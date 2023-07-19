<script>
	// @ts-nocheck

	import { canvasStore, canvasElements } from '../stores.js';

	let canvas;
	let canvases;
	let isLoading = false;
	let showCanvasList = false;
	canvasStore.subscribe((value) => {
		canvas = value;
	});
	let canvasName, canvasId;
	canvasName = canvas.name;
	canvasId = canvas.id;

	async function showAllCanvases() {
		isLoading = true;
		const response = await fetch('/edit?requestType=getAllCanvases');

		if (response.ok) {
			showCanvasList = true;
			let data = await response.json();
			// If data is not an array, make it an array with one element
			canvases = Array.isArray(data) ? data : [data];
			isLoading = false;
			console.log('Canvases loaded successfully.', JSON.stringify(canvases, null, 2));
		} else {
			isLoading = false;
			console.log('Error loading canvases.');
		}
	}

	async function loadCanvas() {
		isLoading = true;
		const response = await fetch(`/edit?requestType=getCanvas&id=${canvasId}`);

		if (response.ok) {
			const { id, name, state } = await response.json();
			console.log('Canvas loaded successfully.', id, name, state);
			canvasId = id;
			canvasName = name;
			canvasStore.update((canvas) => ({ ...canvas, state: state }));
			canvasElements.update((elements) => state);
			isLoading = false;
			showCanvasList = false;
		} else {
			isLoading = false;
			console.log('Error loading canvas.');
		}
	}

	async function saveCurrentState() {
		isLoading = true;
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
			isLoading = false;
			console.log('Canvas saved successfully.', id, name);
			canvasId = id;
		} else {
			isLoading = false;
			console.log('Error saving canvas.');
		}
	}
</script>

{#if isLoading}
	<p>Loading...</p>
{:else if canvasName}
	<p>Canvas name: {canvasName}</p>
{/if}
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
