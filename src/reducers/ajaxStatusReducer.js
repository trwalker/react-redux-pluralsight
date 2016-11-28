import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type === types.AJAX_CALL_BEGIN) {
        return state + 1;
    }
    else if(actionTypeEndsWithSuccess(action.type)  || action.type === types.AJAX_CALL_ERROR) {
        return state - 1;
    }

    return state;
}

function actionTypeEndsWithSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}
