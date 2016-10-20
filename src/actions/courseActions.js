import * as types from './actionTypes';
import courseService from '../services/courseService';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesError(error) {
    return { type: types.LOAD_COURSES_SUCCESS, courses: [], error };
}

export function loadCourses() {
    return function(dispatch) {
        return courseService.getCourses((courses, error) => {
            if(!error) {
                dispatch(loadCoursesSuccess(courses));
            }
            else {
                dispatch(loadCoursesError(error));
            }
        });
    };
}