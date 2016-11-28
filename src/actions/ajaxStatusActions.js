import * as types from './actionTypes';

export function ajaxCallBegin() {
    return { type: types.AJAX_CALL_BEGIN };
}

export function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}
