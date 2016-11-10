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
            errors: {}
        };

        this.updateCourse = this.updateCourse.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourse(event) {
        const field = event.target.name;
        const course = this.state.course;
        course[field] = event.target.value;

        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
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
}

function mapStateToProps(state) {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

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
