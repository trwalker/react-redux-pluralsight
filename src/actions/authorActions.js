import * as types from './actionTypes';
import authorService from '../services/authorService';
import { beginAjaxCall } from '../actions/ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthorsError(error) {
    return { type: types.LOAD_AUTHORS_ERROR, authors: [], error: error };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        authorService.loadAuthors((authors, error) => {
            if(!error) {
                dispatch(loadAuthorsSuccess(authors));
            }
            else {
                dispatch(loadAuthorsError(error));
            }
        });
    };
}