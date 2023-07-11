<script>
	export let dataDemoPattern = 'wm-card-preview';
	export let heading = 'Parkpickerl im grünen Prater';
	export let contentText =
		"Seit 4. Juli gelten im Prater die <a href='#'>flächendeckende Kurzparkzone</a> und das Parkpickerl für Bezirks-Bewohner*innen.";
	export let listItems = ['Parken', 'Parkenpickerl', 'Parken in Wien'];
	export let mediaSrc = '/images/parkpickerl-prater.jpg';
	export let mediaWidth = '350';
	export let mediaHeight = '197';
	export let mediaAlt = 'Parkpickerl im grünen Prater';
	export let eyecatcher = '-10%';
	export let eyecatcherVisible = false;
	export let size = 'm';
</script>

<wm-card data-demo-pattern={dataDemoPattern} {size}>
	<h3 slot="heading" data-demo="true" data-demo-text contenteditable>
		{@html heading}
	</h3>

	<div slot="content" class="text">
		<p>{@html contentText}</p>
	</div>

	<div slot="content" class="list" style={eyecatcherVisible ? 'display: block' : 'display: none'}>
		<ul>
			{#each listItems as item (item)}
				<li><a href="/#">{item}</a></li>
			{/each}
		</ul>
	</div>

	<img slot="media" src={mediaSrc} width={mediaWidth} height={mediaHeight} alt={mediaAlt} />
	<div
		slot="eyecatcher"
		class="eyecatcher"
		style={eyecatcherVisible ? 'display: block' : 'display: none'}
	>
		{eyecatcher}
	</div>
</wm-card>
