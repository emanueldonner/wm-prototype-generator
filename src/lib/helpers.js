// @ts-nocheck
import { v4 as uuidv4 } from 'uuid';

export function createRowsAndColumns(component, parentIsRow = false) {
	if (component.component.startsWith('wm-')) {
		// If component starts with "wm-", create a new Column for it
		const newColumn = {
			id: uuidv4(),
			component: 'Column',
			children: [
				{
					id: uuidv4(),
					component: component.component,
					content: component.content,
					props: component.props,
					children: component.children
						? component.children.map((child) => createRowsAndColumns(child, true))
						: []
				}
			]
		};

		// Wrap the new Column with a Row, only if its parent is not a Row
		return parentIsRow
			? newColumn
			: {
					id: uuidv4(),
					component: 'Row',
					children: [newColumn]
			  };
	} else {
		// If component is not "wm-", just return it as is
		return {
			id: uuidv4(),
			component: component.component,
			content: component.content,
			props: component.props,
			children: component.children
				? component.children.map((child) => createRowsAndColumns(child, false))
				: []
		};
	}
}
