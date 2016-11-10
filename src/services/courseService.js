import courseApi from '../api/mockCourseApi';

class CourseService {
    getCourses(callback) {
        return courseApi.getAllCourses().then(courses => {
            callback(courses, null);
        }).catch(error => {
            callback([], error);
        });
    }

    saveCourse(course, callback) {
        const isNew = course.id ? false : true;

        return courseApi.saveCourse(course).then(savedCourse => {
            callback(isNew, savedCourse);
        }).catch(error => {
            callback(isNew, null, error);
        });
    }
}

let courseService = new CourseService();

export default courseService;