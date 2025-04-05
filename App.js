import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import "./index.css";
import Announcements from "./components/Announcements";
import DeptYear from "./components/DeptYear";
import Notes from "./components/Notes";
import Events from "./components/Events";
import MarkEntry from "./staff/MarkEntry";
import DailyAttendance from "./staff/DailyAttendance";
import Feedback from "./staff/Feedback";
import UploadNotes from "./staff/UploadNotes";

// ✅ Dark Mode Toggle Component
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <div className="toggle-container">
    <button className="toggle-button" onClick={toggleDarkMode}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  </div>
);

// ✅ Login Component - Accepts setUserType Prop
const Login = ({ setUserType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "student@example.com") {
      setUserType("student");
    } else if (email === "staff@example.com") {
      setUserType("staff");
    } else {
      alert("Invalid credentials! Use 'student@example.com' or 'staff@example.com'");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        className="input-box"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="input-box"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <footer>Contact: support@example.com | XYZ College</footer>
    </div>
  );
};
const StudentDashboard = () => (
  <div className="dashboard-container ">
    {/* Sidebar with Profile */}
    <aside className="sidebar">
      <div className="profile-box">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Dept:</strong> CSE</p>
          <p><strong>Reg No:</strong> 123456</p>
        </div>
      </div>
    </aside>

    {/* Main Dashboard Content */}
    <div className="dashboard-content sidebar ">
    <h2 style={{ color: "teal", fontSize: "22px" }} className="text-3xl font-bold text-blue-600">
  Student Dashboard
</h2>

      <nav>
        <Link className="nav-link" to="announcements">Announcements</Link>
        <Link className="nav-link" to="deptyear">Dept/Year</Link>
        <Link className="nav-link" to="notes">Notes</Link>
        <Link className="nav-link" to="events">Events</Link>
      </nav>
      <Outlet />
    </div>
  </div>
);
const StaffDashboard = () => (
  <div className="dashboard-container">
    {/* Sidebar */}
    <aside className="sidebar">
      <div className="profile-box">
        <img src="/staff-profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <p><strong>Name:</strong> Dr. Smith</p>
          <p><strong>Dept:</strong> ECE</p>
          <p><strong>Reg No:</strong> S78910</p>
        </div>
      </div>
    </aside>

    {/* Main Dashboard Content */}
    <div className="dashboard-content">
      <h2 className="text-3xl font-bold text-blue-600">Staff Dashboard</h2>
      <nav>
        <Link className="nav-link" to="markentry">Mark Entry</Link>
        <Link className="nav-link" to="attendance">Attendance</Link>
        <Link className="nav-link" to="feedback">Feedback</Link>
        <Link className="nav-link" to="uploadnotes">Upload Notes</Link>
      </nav>
      <Outlet />
    </div>
  </div>
);

// ✅ Footer
const Footer = () => (
  <footer className="mt-10 text-center text-gray-600 text-sm py-4 bg-gray-200 dark:bg-gray-900 dark:text-white">
    Contact: support@example.com | XYZ College
  </footer>
);

// ✅ App Component
const App = () => {
  const [userType, setUserType] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load dark mode preference
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  // Apply dark mode class to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Dark Mode Toggle Button */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        {/* ✅ Login Route */}
        <Route path="/" element={!userType ? <Login setUserType={setUserType} /> : <Navigate to={`/${userType}`} />} />

        {/* ✅ Student Dashboard Routes */}
        <Route path="student/*" element={<StudentDashboard />}>
          <Route path="announcements" element={<Announcements />} />
          <Route path="deptyear" element={<DeptYear />} />
          <Route path="notes" element={<Notes />} />
          <Route path="events" element={<Events />} />
        </Route> 

        {/* ✅ Staff Dashboard Routes */}
        <Route path="staff/*" element={<StaffDashboard />}>
          <Route path="markentry" element={<MarkEntry />} />
          <Route path="attendance" element={<DailyAttendance />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="uploadnotes" element={<UploadNotes />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;









































