import { actionTypes } from "@servicenow/ui-core";
import { createHttpEffect } from '@servicenow/ui-effect-http';
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
import { FETCH_TABLE_NAME_SUCCEEDED, FETCH_TABLE_NAME_FAILED, GET_TABLE_NAME } from './constants';

export default {
    actionHanlders: {
        [COMPONENT_BOOTSTRAPPED]: (coeffect) => {
            console.log(coeffect)
        }
    }
}