import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/mark-entry">Mark Entry</Link>
      <Link to="/daily-attendance">Daily Attendance</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/upload-notes">Upload Notes</Link>
    </nav>
  );
}

export default Navbar;

