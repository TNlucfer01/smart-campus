import React from "react";
import { Link, Outlet } from "react-router-dom";

function StaffDashboard() {
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <div className="staff-navbar">
        <h2>Staff Dashboard</h2>
        <div className="staff-links">
          <Link to="markentry">Mark Entry</Link>
          <Link to="attendance">Daily Attendance</Link>
          <Link to="feedback">Feedback</Link>
          <Link to="uploadnotes">Upload Notes</Link>
        </div>

        {/* Profile (Top-Right) */}
        <div className="profile-section">
          <Link to="profile">👤 Profile</Link>
        </div>
      </div>

      {/* Render nested components here */}
      <Outlet />
    </div>
  );
}

export default StaffDashboard;
