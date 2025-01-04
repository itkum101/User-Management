import React, { useState } from "react";
import "./ProfileSettings.css"; // Import the CSS file

const ProfileSettings = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "",
    newPassword: "",
    twoFAEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleToggle2FA = () => {
    setUserInfo({
      ...userInfo,
      twoFAEnabled: !userInfo.twoFAEnabled,
    });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    alert("Password changed successfully!");
  };

  return (
    <div className="profile-settings-container">
      <h1>Profile Settings</h1>

      {/* Update Personal Information */}
      <section>
        <h2>Update Personal Information</h2>
        <form onSubmit={handleUpdateProfile}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />

          <button type="submit">Update Information</button>
        </form>
      </section>

      {/* Change Password */}
      <section>
        <h2>Change Password</h2>
        <form onSubmit={handleChangePassword}>
          <label htmlFor="password">Current Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            placeholder="Enter your current password"
            required
          />

          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={userInfo.newPassword}
            onChange={handleChange}
            placeholder="Enter your new password"
            required
          />

          <button type="submit">Change Password</button>
        </form>
      </section>

      {/* Enable/Disable 2FA */}
      <section>
        <h2>Enable 2-Factor Authentication</h2>
        <div className="switch-container">
          <label>2FA</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={userInfo.twoFAEnabled}
              onChange={handleToggle2FA}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          type="button"
          disabled={!userInfo.twoFAEnabled}
          onClick={() => alert("2FA settings updated!")}
        >
          Save 2FA Settings
        </button>
      </section>
    </div>
  );
};

export default ProfileSettings;
