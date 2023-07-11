export const componentList = [
	{ title: 'Accordion', name: 'accordion', tag: 'wm-accordion' },
	{ title: 'Anchor', name: 'anchor', tag: 'wm-anchor' },
	{ title: 'Badge', name: 'badge', tag: 'wm-badge' },
	{ title: 'Button', name: 'button', tag: 'wm-button' },
	{ title: 'Card', name: 'card', tag: 'wm-card' },
	{ title: 'Carousel', name: 'carousel', tag: 'wm-carousel' },
	{ title: 'CTA', name: 'cta', tag: 'wm-cta' },
	{ title: 'Fetch', name: 'fetch', tag: 'wm-fetch' },
	{
		title: 'FilterDropdown',
		name: 'filterdropdown',
		tag: 'wm-filterdropdown'
	},
	{ title: 'Grid', name: 'grid', tag: 'wm-grid' },
	{ title: 'Header', name: 'header', tag: 'wm-header' },
	{ title: 'Highlight', name: 'highlight', tag: 'wm-highlight' },
	{ title: 'Icon', name: 'icon', tag: 'wm-icon' },
	{ title: 'List', name: 'list', tag: 'wm-list' },
	{ title: 'Map', name: 'map', tag: 'wm-map' },
	{ title: 'Modal', name: 'modal', tag: 'wm-modal' },
	{ title: 'NavMain', name: 'navmain', tag: 'wm-navmain' },
	{ title: 'Quicklinks', name: 'quicklinks', tag: 'wm-quicklinks' },
	{ title: 'Section', name: 'section', tag: 'wm-section' },
	{ title: 'Stack', name: 'stack', tag: 'wm-stack' },
	{ title: 'Stage', name: 'stage', tag: 'wm-stage' },
	{
		title: 'Statusanzeige',
		name: 'statusanzeige',
		tag: 'wm-statusanzeige'
	},
	{ title: 'Tabs', name: 'tabs', tag: 'wm-tabs' },
	{ title: 'Tag', name: 'tag', tag: 'wm-tag' },
	{ title: 'TagList', name: 'taglist', tag: 'wm-taglist' },
	{ title: 'Toggle', name: 'toggle', tag: 'wm-toggle' }
];

export const componentKeyMap = componentList.reduce((acc, curr) => {
	// @ts-ignore
	acc[curr.tag] = `${curr.name}Data`;
	return acc;
}, {});
