import React from "react";
import "./Login.css";
import GoogleIcon from "@mui/icons-material/Google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const handleGoogleSignIn = () => {
    alert("Google Sign-In Clicked!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <LockOutlinedIcon className="login-icon" />
          <h1 className="login-title">Login</h1>
        </div>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-divider">
          <hr className="login-line" />
          <span className="login-or">OR</span>
          <hr className="login-line" />
        </div>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <GoogleIcon className="google-icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
