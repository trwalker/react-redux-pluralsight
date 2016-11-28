import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false
        };

        this.updateCourse = this.updateCourse.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) });
        }
    }

    updateCourse(event) {
        const field = event.target.name;
        const course = this.state.course;
        course[field] = event.target.value;

        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions
            .saveCourse(this.state.course)
            .then(() => this.saveComplete());
    }

    saveComplete() {
        this.setState({ saving: false });
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    onChange={this.updateCourse}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(id, courses) {
    const course = courses.filter(course => course.id === id);
    if (course) {
        return course[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    const courseIdParam = ownProps.params.id;

    if(courseIdParam) {
        const existingCourse = getCourseById(courseIdParam, state.courses);
        course = existingCourse || course;
    }

    const authorOptions = state.authors.map(author => {
       return {
           value: author.id,
           text: `${author.firstName} ${author.lastName}`
       };
    });

    return {
        course: course,
        authors: authorOptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
