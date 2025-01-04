import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending password reset email (mocked here)
    alert("Password reset email sent to " + email);
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <p>Enter your email address to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default ForgotPassword;
