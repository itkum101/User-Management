import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this based on actual login state

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <header className="header">
      <div className="header-logo">
        <SchoolIcon className="header-icon" />
        <h1>Student Portal</h1>
      </div>
      <nav className="header-nav">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="header-link">
              Dashboard
            </Link>
            <button className="header-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="header-link">
              Register
            </Link>
            <Link to="/login" className="header-link">
              Login
            </Link>
          </>
        )}
      </nav>
      <button className="header-menu">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
