<!-- WmAccordion.svelte -->
<script>
	export let open = 'false';
	export let multiple = 'false';
	export let dataDemoPattern = 'wm-accordion-preview';
	export let sections = [
		{
			heading: 'Ist eine Mitgliedschaft beim Vorteilsclub der Stadt Wien mit Kosten verbunden?',
			content:
				'Nein. Die Mitgliedschaft im Vorteilsclub der Stadt Wien ist absolut kostenlos und ohne Bindung.'
		},
		{
			heading: 'Wer kann Mitglied im Vorteilsclub der Stadt Wien werden?',
			content:
				'Jede natürliche Person mit Wohnsitz in Österreich, die das 16. Lebensjahr vollendet hat.'
		}
	];
</script>

<wm-accordion {open} {multiple} data-demo-pattern={dataDemoPattern}>
	{#each sections as section (section.heading)}
		<h3 slot="heading">
			{section.heading}
		</h3>
		<div slot="content">
			<p>
				{section.content}
			</p>
		</div>
	{/each}
</wm-accordion>
