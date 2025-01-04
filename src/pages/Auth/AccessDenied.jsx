import React from "react";
import { Link } from "react-router-dom"; // For navigation link to home/dashboard
import "./AccessDenied.css"; // Import the CSS file

const AccessDenied = () => {
  return (
    <div className="access-denied-container">
      <div className="access-denied-content">
        <h1>Access Denied</h1>
        <p>You do not have permission to access this page.</p>
        <Link to="/" className="go-home-link">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AccessDenied;
