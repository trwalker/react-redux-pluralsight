import * as types from './actionTypes';
import courseService from '../services/courseService';
import { ajaxCallBegin, ajaxCallError } from '../actions/ajaxStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return dispatch => {
        dispatch(ajaxCallBegin());
        return courseService.getCourses((courses, error) => {
            if(!error) {
                dispatch(loadCoursesSuccess(courses));
            }
            else {
                dispatch(ajaxCallError());
                throw(error);
            }
        });
    };
}

export function saveCourse(course) {
    return dispatch => {
        dispatch(ajaxCallBegin());
        return courseService.saveCourse(course, (isNew, savedCourse, error) => {
            if(!error) {
                isNew ? dispatch(createCourseSuccess(savedCourse)) : dispatch(updateCourseSuccess(savedCourse));
            }
            else {
                dispatch(ajaxCallError());
                throw(error);
            }
        });
    };
}