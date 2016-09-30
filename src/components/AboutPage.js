import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
    return (
        <div className="jumbotron">
            <h1>About</h1>
            <p>Go now, now go....</p>
            <Link to="/" className="btn btn-primary btn-large">Home</Link>
        </div>
    );
};

export default AboutPage;