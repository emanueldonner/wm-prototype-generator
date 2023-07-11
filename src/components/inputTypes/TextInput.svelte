<script>
	/**
	 * @type {string}
	 */
	export let id;
	/**
	 * @type {string}
	 */
	export let label;
	export let value = '';
</script>

<div>
	<label for={id}>{label}:</label>
	<input {id} type="text" bind:value />
</div>
