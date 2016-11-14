import * as types from './actionTypes';
import courseService from '../services/courseService';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesError(error) {
    return { type: types.LOAD_COURSES_SUCCESS, courses: [], error };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function saveCourseError(error) {
    return { type: types.SAVE_COURSE_ERROR, course: null, error };
}

export function loadCourses() {
    return dispatch => {
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

export function saveCourse(course) {
    return dispatch => {
        return courseService.saveCourse(course, (isNew, savedCourse, error) => {
            if(!error) {
                isNew ? dispatch(createCourseSuccess(savedCourse)) : dispatch(updateCourseSuccess(savedCourse));
            }
            else {
                dispatch(saveCourseError(error));
            }
        });
    };
}