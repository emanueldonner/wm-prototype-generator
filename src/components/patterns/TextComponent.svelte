<script>
	// @ts-nocheck

	export let content = '';
	$: displayedContent = content;

	let renderKey = 0;
	$: {
		renderKey++;
	}
</script>

<div key={renderKey}>
	{@html displayedContent}
</div>
