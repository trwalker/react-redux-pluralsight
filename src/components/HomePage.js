import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Demo</h1>
                <p>React, Redux, React Router</p>
                <div className="row">
                    <div className="col-xs-1">
                        <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
                    </div>
                    <div className="col-xs-1">
                        <Link to="courses" className="btn btn-primary btn-large">Courses</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;