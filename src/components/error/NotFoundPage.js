import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
      <div>
          <h4>
              404 Page Not Found
          </h4>
          <Link to="/">Home</Link>
      </div>
    );
};

export default NotFoundPage;