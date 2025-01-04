import React from "react";
import { Link } from "react-router-dom"; // For navigation link to home/dashboard
import "./404NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="go-home-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
