import { writable, readable } from 'svelte/store';
import WmCard from './WmCard.svelte';
import WmAccordion from './WmAccordion.svelte';
import WmCta from './WmCta.svelte';

export const templateStore = writable({
	accordionData: {
		component: 'wm-accordion',
		props: {
			open: false,
			multiple: false,
			'data-demo-pattern': 'wm-accordion-preview'
		},
		children: [
			{
				component: 'h3',
				props: {
					slot: 'heading'
				},
				children: [
					{
						component: 'text',
						content:
							'Ist eine Mitgliedschaft beim Vorteilsclub der Stadt Wien mit Kosten verbunden?'
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Nein. Die Mitgliedschaft im Vorteilsclub der Stadt Wien ist absolut kostenlos und ohne Bindung.'
							}
						]
					}
				]
			},
			{
				component: 'h3',
				props: {
					slot: 'heading'
				},
				children: [
					{
						component: 'text',
						content: 'Wer kann Mitglied im Vorteilsclub der Stadt Wien werden?'
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Jede natürliche Person mit Wohnsitz in Österreich, die das 16. Lebensjahr vollendet hat.'
							}
						]
					}
				]
			}
		]
	},
	cardData: {
		component: 'wm-card',
		props: {
			'data-demo-pattern': 'wm-card-preview',
			size: 'm'
		},
		children: [
			{
				component: 'h3',
				props: {
					slot: 'heading',
					'data-demo': true,
					'data-demo-text': true
				},
				children: [{ component: 'text', content: 'Parkpickerl im grünen Prater' }]
			},
			{
				component: 'div',
				props: {
					slot: 'content',
					class: 'text'
				},
				children: [
					{
						component: 'p',
						children: [
							{
								component: 'text',
								content:
									'Seit 4. Juli gelten im Prater die <a href="#">flächendeckende Kurzparkzone</a> und das Parkpickerl für Bezirks-Bewohner*innen.'
							}
						]
					}
				]
			},
			{
				component: 'div',
				props: {
					slot: 'content',
					class: 'list'
				},
				children: [
					{
						component: 'ul',
						children: [
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parken' }]
									}
								]
							},
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parkenpickerl' }]
									}
								]
							},
							{
								component: 'li',
								children: [
									{
										component: 'a',
										props: { href: '/#' },
										children: [{ component: 'text', content: 'Parken in Wien' }]
									}
								]
							}
						]
					}
				]
			},
			{
				component: 'img',
				props: {
					slot: 'media',
					src: '/images/parkpickerl-prater.jpg',
					width: '350',
					height: '197',
					alt: 'Parkpickerl im grünen Prater'
				},
				children: []
			},
			{
				component: 'div',
				props: {
					slot: 'eyecatcher',
					class: 'eyecatcher'
				},
				children: [{ component: 'text', content: '-10%' }]
			}
		]
	}
});

// defining the store
export const patternStore = readable([
	{
		component: WmCard,
		props: {
			dataDemoPattern: { type: 'string', defaultValue: 'wm-card-preview' },
			heading: { type: 'string', defaultValue: 'Parkpickerl im grünen Prater' },
			contentText: {
				type: 'string',
				defaultValue:
					"Seit 4. Juli gelten im Prater die <a href='#'>flächendeckende Kurzparkzone</a> und das Parkpickerl für Bezirks-Bewohner*innen."
			},
			listItems: { type: 'array', defaultValue: ['Parken', 'Parkenpickerl', 'Parken in Wien'] },
			mediaSrc: { type: 'string', defaultValue: '/images/parkpickerl-prater.jpg' },
			mediaWidth: { type: 'string', defaultValue: '350' },
			mediaHeight: { type: 'string', defaultValue: '197' },
			mediaAlt: { type: 'string', defaultValue: 'Parkpickerl im grünen Prater' },
			eyecatcher: { type: 'string', defaultValue: '-10%' },
			eyecatcherVisible: { type: 'boolean', defaultValue: false },
			size: { type: 'string', defaultValue: 'm' }
		}
	},
	{
		component: WmAccordion,
		props: {
			open: { type: 'boolean', defaultValue: false },
			multiple: { type: 'boolean', defaultValue: false },
			heading1: {
				type: 'string',
				defaultValue:
					'Ist eine Mitgliedschaft beim Vorteilsclub der Stadt Wien mit Kosten verbunden?'
			},
			content1: {
				type: 'string',
				defaultValue:
					'Nein. Die Mitgliedschaft im Vorteilsclub der Stadt Wien ist absolut kostenlos und ohne Bindung.'
			},
			heading2: {
				type: 'string',
				defaultValue: 'Wer kann Mitglied im Vorteilsclub der Stadt Wien werden?'
			},
			content2: {
				type: 'string',
				defaultValue:
					'Jede natürliche Person mit Wohnsitz in Österreich, die das 16. Lebensjahr vollendet hat.'
			}
		}
	},
	{
		component: WmCta,
		props: {
			href: { type: 'string', defaultValue: '#' },
			text: { type: 'string', defaultValue: 'Mehr erfahren' }
		}
	}
	// add more components as needed
]);
