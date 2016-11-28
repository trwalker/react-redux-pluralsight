import * as types from './actionTypes';
import authorService from '../services/authorService';
import { ajaxCallBegin, ajaxCallError } from '../actions/ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

export function loadAuthors() {
    return dispatch => {
        dispatch(ajaxCallBegin());
        authorService.loadAuthors((authors, error) => {
            if(!error) {
                dispatch(loadAuthorsSuccess(authors));
            }
            else {
                dispatch(ajaxCallError());
                throw(error);
            }
        });
    };
}