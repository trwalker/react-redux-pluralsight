import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
    authors: authorReducer,
    courses: courseReducer
});

export default rootReducer;