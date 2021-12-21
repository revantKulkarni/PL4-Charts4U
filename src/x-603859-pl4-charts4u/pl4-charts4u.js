import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view'
import actions from "./actions";
import styles from './styles.scss';

createCustomElement('x-603859-pl4-charts4u', {
    renderer: { type: snabbdom },
    view,
    styles,
    ...actions
})
