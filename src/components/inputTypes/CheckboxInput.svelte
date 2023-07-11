<script>
	/** @type {string} */
	export let id;
	/** @type {string} */
	export let label;
	export let checked = false;
</script>

<div>
	<label for={id}>{label}:</label>
	<input {id} type="checkbox" bind:checked />
</div>
