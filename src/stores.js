import { writable, readable, derived } from 'svelte/store';

export const siteName = writable('Test Site');

export const showConfigSidebar = writable(false);

export const selectedComponent = writable(null);

export const canvasElements = writable([]);

export const defaultComponentStore = readable([
	{
		title: 'Accordion',
		name: 'accordion',
		id: 'accordion',
		tag: 'wm-accordion',
		editablePropsAndAttributes: ['open', 'multiple', 'content'],
		editableVariables: {
			background: {
				name: 'Hintergrundfarbe des Buttons',
				default: 'transparent',
				$value: 'var(--wm-color-nebelgrau-light)',
				type: 'color'
			},
			contrast: {
				name: 'Kontrastfarbe, z.B. für Multimediaelemete',
				default: '#FFF',
				$value: 'var(--wm-color-weiss)',
				type: 'color'
			},
			'padding-inline': {
				name: 'Innenabstand links und rechts',
				default: '0',
				type: 'text',
				$value: '0.9375rem'
			},
			'padding-block': {
				name: 'Innenabstand oben und unten',
				default: '0',
				type: 'text',
				$value: '0.375rem 0.3125rem'
			},
			icon: {
				name: 'Symbol',
				default: 'none',
				type: 'text',
				$value: "url('/public/wiener-melange/icons/chevron-down.svg')"
			},
			'icon-size': {
				name: 'Größe des Symbols',
				default: '0',
				type: 'text',
				$value: '1.5rem'
			}
		}
	},
	{ title: 'Anchor', name: 'anchor', id: 'anchor', tag: 'wm-anchor' },
	{ title: 'Badge', name: 'badge', id: 'badge', tag: 'wm-badge' },
	{ title: 'Button', name: 'button', id: 'button', tag: 'wm-button' },
	{
		title: 'Card',
		name: 'card',
		id: 'card',
		tag: 'wm-card',
		editablePropsAndAttributes: [
			'heading',
			'contentText',
			'listItems',
			'mediaSrc',
			'mediaAlt',
			'eyecatcher',
			'eyecatcherVisible',
			'size'
		],
		editableVariables: {
			background: {
				name: 'Hintergrundfarbe der Card',
				default: '#FFFFFF',
				$value: 'var(--wm-color-weiss)',
				type: 'color'
			},
			border: {
				name: 'Rahmen der Card',
				default: '1px solid var(--site-color)',
				$value: 'none',
				type: 'text'
			},
			'eyecatcher-spacing': {
				name: 'Abstand des Störers zum Rand',
				default: '1rem',
				$value: 'var(--wm-spacing-s)',
				type: 'text'
			},
			'eyecatcher-padding': {
				name: 'Innenabstand im Störer',
				default: '0.5rem',
				$value: 'var(--wm-spacing-xs)',
				type: 'text'
			},
			'eyecatcher-fontsize': {
				name: 'Schriftgröße im Störer',
				default: '1.5rem',
				$value: 'var(--wm-font-size-l)',
				type: 'text'
			},
			'media-background': {
				name: 'Hintergrundfarbe',
				default: 'hsl(0 0% 0%)',
				$value: 'var(--wm-color-frischgruen)',
				type: 'color'
			},
			'media-color': {
				name: 'Textfarbe',
				default: 'hsl(0 0% 100%)',
				$value: 'var(--wm-color-fastschwarz)',
				type: 'color'
			},
			spacing: {
				name: 'Innenabstand in der Card',
				default: '1rem',
				$value: 'var(--wm-spacing-s)',
				type: 'text'
			},
			'spacing-large': {
				name: 'Innenabstand in der Card auf großen Bildschirmen',
				default: '1.5rem',
				$value: 'var(--wm-spacing-l)',
				type: 'text'
			},
			shadow: {
				name: 'Schatten um die Card',
				default: 'none',
				$value: '0 4px 8px 0 var(--wm-color-fastschwarz-light)',
				type: 'text'
			}
		}
	},
	{ title: 'Carousel', name: 'carousel', id: 'carousel', tag: 'wm-carousel' },
	{ title: 'CTA', name: 'cta', id: 'cta', tag: 'wm-cta' },
	{ title: 'Fetch', name: 'fetch', id: 'fetch', tag: 'wm-fetch' },
	{
		title: 'FilterDropdown',
		name: 'filterdropdown',
		id: 'filterdropdown',
		tag: 'wm-filterdropdown'
	},
	{ title: 'Grid', name: 'grid', id: 'grid', tag: 'wm-grid' },
	{ title: 'Header', name: 'header', id: 'header', tag: 'wm-header' },
	{ title: 'Highlight', name: 'highlight', id: 'highlight', tag: 'wm-highlight' },
	{ title: 'Icon', name: 'icon', id: 'icon', tag: 'wm-icon' },
	{ title: 'List', name: 'list', id: 'list', tag: 'wm-list' },
	{ title: 'Map', name: 'map', id: 'map', tag: 'wm-map' },
	{ title: 'Modal', name: 'modal', id: 'modal', tag: 'wm-modal' },
	{ title: 'NavMain', name: 'navmain', id: 'navmain', tag: 'wm-navmain' },
	{ title: 'Quicklinks', name: 'quicklinks', id: 'quicklinks', tag: 'wm-quicklinks' },
	{ title: 'Section', name: 'section', id: 'section', tag: 'wm-section' },
	{ title: 'Stack', name: 'stack', id: 'stack', tag: 'wm-stack' },
	{ title: 'Stage', name: 'stage', id: 'stage', tag: 'wm-stage' },
	{
		title: 'Statusanzeige',
		name: 'statusanzeige',
		id: 'statusanzeige',
		tag: 'wm-statusanzeige'
	},
	{ title: 'Tabs', name: 'tabs', id: 'tabs', tag: 'wm-tabs' },
	{ title: 'Tag', name: 'tag', id: 'tag', tag: 'wm-tag' },
	{ title: 'TagList', name: 'taglist', id: 'taglist', tag: 'wm-taglist' },
	{ title: 'Toggle', name: 'toggle', id: 'toggle', tag: 'wm-toggle' }
]);

export const componentKeyMap = derived(defaultComponentStore, ($defaultComponentStore) => {
	return $defaultComponentStore.reduce((acc, curr) => {
		// @ts-ignore
		acc[curr.tag] = `${curr.name}Data`;
		return acc;
	}, {});
});
