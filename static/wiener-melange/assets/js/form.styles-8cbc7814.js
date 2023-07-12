/* @copyright Stadt Wien - Wiener Melange v2 */
import{i as e}from"./lit-element-a22611a3.js";const t=[e`
		form {
			margin-block-end: 2em;
		}

		form > * + * {
			margin-block-start: 1em;
		}

		input,
		button,
		textarea,
		select {
			font: inherit;
			/* max-width: 30rem; */
		}

		label,
		.wm-e-label {
			display: block;
			font-weight: var(--content-font-weight);
			font-variation-settings: var(--content-font-variation-settings);
			margin-block-end: 0.125rem;
		}

		:where(input[type="checkbox"], input[type="radio"]) + label {
			display: inline-block;
			font-weight: normal;
			font-variation-settings: normal;
		}

		input:is([type="time"], [type="date"], [type="text"],  [type="tel"], [type="url"], [type="email"], [type="password"], ),
		textarea {
			background-color: var(--input-background);
			border: 1px solid var(--input-border-color);
			border-radius: 0;
			color: var(--input-color);
  		display: block;
			line-height: 1;
			margin: 0;
			min-height: var(--input-min-height);
			padding: var(--input-padding);
			width: 100%;
		}

		@media(min-width: 48em) {
			input:is(
				[type="date"],
				[type="email"],
				[type="password"],
				[type="text"],
				[type="tel"],
				[type="time"]
				[type="url"]
			)[size] {
				width: auto;
			}
		}

		:is(input, textarea, select)[aria-disabled="true"],
		:is(input, textarea, select)[aria-disabled="true"] + label {
			opacity: 0.7;
			cursor: not-allowed;
			pointer-events: none;
			border: none;
		}
		

		select {
			appearance: var(--select-appearance);
			background-color: var(--select-background);
			border: 1px solid var(--select-border-color);
			border-radius: 0;
			color: var(--select-color);
			font-family: inherit;
			font-size: inherit;
			margin: 0;
			min-height: var(--select-min-height);
			min-width: 8.75rem;
			width: 100%;
		}
		
		select:not([size]:not([size="1"])):not([multiple]) {
			background-image: var(--select-icon);
			background-repeat: no-repeat;
			background-position: right 0.625rem center;
			padding: var(--select-padding);
		}

		:is(button, .wm-e-button:link, .wm-e-button:visited) {
			align-items: center;
			background-color: var(--button-background);
			border: 1px solid var(--button-border-color);
			color: var(--button-color);
			display: inline-flex;
			font-weight: var(--content-font-weight);
			font-variation-settings: var(--content-font-variation-settings);
			font-size: var(--button-font-size, inherit);
			justify-content: center;
			line-height: 1.45;
			padding: 0.463em 0.88em;
			text-align: center;
			text-decoration: none;
			text-transform: var(--button-text-transform, uppercase);
		}

		/* split up selectors because .wm-e-button:link in :is() increases the specificty of button */
		button:is(:focus-visible, :hover),
		:is(.wm-e-button:link, .wm-e-button:visited):is(:focus-visible, :hover) {
			--button-background: var(--button-background-hover);
			--button-color: var(--button-color-hover);
		}

		fieldset {
			border: 0;
			padding: 0;
		}

		legend {
			font-weight: var(--content-font-weight);
			font-variation-settings: var(--content-font-variation-settings);
			padding: 0;
		}

		:is(input[type="radio"], input[type="checkbox"]) {
			appearance: none;
			border: 1px solid var(--input-accent-color);
			display: inline-block;
			height: 1rem;
			margin: 0;
			margin-inline-end: 0.5rem;
			position: relative;
			top: 0.125rem;
			width: 1rem;
		}

		input[type="radio"] {
			border-radius: 50%;
		}

		input[type="checkbox"]:is(:checked, :indeterminate) {
			background-color: var(--accent-color, var(--input-accent-color));
			background-image: var(--input-checkbox-icon);
			background-position: right 0 center;
			background-size: cover;
		}

		input[type="radio"]:checked {
			box-shadow: inset 0 0 0 4px #fff;
		}

		input[type="radio"]:checked {
			background-color: var(--accent-color, var(--input-accent-color));
		}

		input[type="checkbox"]:indeterminate {
			background-color: var(--input-border-color);
		}

		/* Errors */

		[aria-invalid="true"] {
			--input-border-color: var(--wm-color-ui-error);
		}

		.wm-forms-message {
			padding-block: 0.2rem;
		}

		[aria-invalid="true"] ~ .wm-forms-message {
			color: var(--wm-color-ui-error);
		}

		div:has(> [aria-invalid="true"]) {
			color: var(--wm-color-ui-error);
		}
	`];export{t as f};
