import { css } from 'lit'

export const styles = [css`
:host {
  display: flex;
  flex-direction: column;
}

@media(min-width: 48em) {
  :host {
    flex-direction: row;
  }
}

:host([vertical="true"]) {
  flex-direction: column;
}

:host([horizontal="true"]) {
  flex-direction: row;
}

:host([grow="false"][vertical="true"]) {
  align-items: start;
}

/* Noch testen, ob das was macht:
:host([wrap="false"]) ::slotted(*) {
  flex-shrink: 0;
}
*/

:host {
  --_justify: start;
  --_align: normal;
  --_gap: 0;

  justify-content: var(--_justify);
  align-items: var(--_align);
  gap: var(--_gap);
}

:host([wrap="true"]) {
  flex-wrap: wrap;
}

:host([wrap="false"]:not([vertical="true"])) {
  overflow: auto;
}

:host([grow="true"]) ::slotted(*) {
  flex-grow: 1;
}

:host([equal="true"][grow="true"]) ::slotted(*) {
  flex-shrink: 0;
  min-width: 0;
}

:host([equal="true"][grow="true"]:not([wrap="true"])) ::slotted(*:not(wm-stack[vertical="false"])) {
  flex-basis: 0px;
}

:host([gap="xs"]) {
  --_gap: var(--stack-spacing-xs);
}

:host([gap="s"]) {
  --_gap: var(--stack-spacing-s);
}

:host([gap="m"]) {
  --_gap: var(--stack-spacing-m);
}

:host([gap="l"]) {
  --_gap: var(--stack-spacing-l);
}

:host([gapx]) {
  column-gap: var(--_gapx)
}

:host([gapx="xs"]) {
  --_gapx: var(--stack-spacing-xs);
}

:host([gapx="s"]) {
  --_gapx: var(--stack-spacing-s);
}

:host([gapx="m"]) {
  --_gapx: var(--stack-spacing-m);
}

:host([gapx="l"]) {
  --_gapx: var(--stack-spacing-l);
}

:host([gapy]) {
  row-gap: var(--_gapy)
}

:host([gapy="xs"]) {
  --_gapy: var(--stack-spacing-xs);
}

:host([gapy="s"]) {
  --_gapy: var(--stack-spacing-s);
}

:host([gapy="m"]) {
  --_gapy: var(--stack-spacing-m);
}

:host([gapy="l"]) {
  --_gapy: var(--stack-spacing-l);
}

:host([justify="center"]) {
  --_justify: center;
}

:host([justify="space-between"]) {
  --_justify: space-between;
}

@media(min-width: 48em) {
  :host([alignment="center"]) {
    --_align: center;
  }

  :host([alignment="end"]) {
    --_align: end;
  }
}

::slotted(img) {
  align-self: start;
}

::slotted(*) {
  margin: 0 !important;
}
`]
