<script>
	import '../app.postcss';
</script>

<div class="main-container">
	<slot />
	<script src="./wiener-melange/assets/js/bundle.js"></script>
</div>

<style>
	.main-container {
		height: 100%;
	}
</style>
