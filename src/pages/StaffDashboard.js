import React from "react";
import { Link, Outlet } from "react-router-dom";

const StaffDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="staff-navbar">
        <h2>Staff Dashboard</h2>
        <div className="staff-links">
          <Link to="markentry">Mark Entry</Link>
          <Link to="attendance">Daily Attendance</Link>
          <Link to="feedback">Feedback</Link>
          <Link to="uploadnotes">Upload Notes</Link>
        </div>

        {/* Profile Section (Top Right) */}
        <div className="profile-section">
          <Link to="profile">👤 Profile</Link>
        </div>
      </div>

      {/* Nested Components */}
      <Outlet />
    </div>
  );
};

export default StaffDashboard;

