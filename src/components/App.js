import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">React Redux</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-5">
                            <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">Timbo Slice</a></p>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;