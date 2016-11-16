import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import courseReducer from './courseReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
    authors: authorReducer,
    courses: courseReducer,
    ajaxCallsInProgress: ajaxStatusReducer
});

export default rootReducer;