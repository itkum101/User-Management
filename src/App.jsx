import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Spinner from "./components/ui/Spinner";
import Toast from "./components/ui/Toast";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Card from "./components/ui/Card";
import ProfileSettings from "./pages/Auth/ProfileSettings";
import NotFound from "./pages/Auth/404NotFound";
import HomePage from "./pages/Auth/HomePage";

const App = () => {
  const menuItems = [
      { label: "Home", link: "/" },
      { label: "Login", link: "/login" },
      { label: "Register", link: "/register" },
      { label: "Forgot Password", link: "/forgot-password" },
      { label: "Reset Password", link: "/reset-password" },
  ];

  return (
      <Router>
          <div className="app">
              {/* Header */}
              <Header />

              <div className="app-main">
                  {/* Sidebar (optional, not currently being used) */}
                  {/* <Sidebar menuItems={menuItems} /> */}
               
                  {/* Main Content */}
                  <div className="app-content">
                      <Routes>
                          <Route path="/" element={<HomePage/>} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/register" element={<Register />} />
                          <Route path="/forgot-password" element={<ForgotPassword />} />
                          <Route path="/reset-password" element={<ResetPassword />} />
                          <Route path="/profile-settings" element= {<ProfileSettings/>}/>

                           {/* Catch-all route for 404 page */}
              <Route path="*" element={<NotFound />} />
                      </Routes>
                  </div>
              </div>

              {/* Footer */}
              <Footer />
          </div>
      </Router>
  );
};

export default App;
