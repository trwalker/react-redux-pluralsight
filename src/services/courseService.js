import courseApi from '../api/mockCourseApi';

class CourseService {
    getCourses(callback) {
        return courseApi.getAllCourses().then(courses => {
            callback(courses, null);
        }).catch(error => {
            callback([], error);
        });
    }
}

let courseService = new CourseService();

export default courseService;