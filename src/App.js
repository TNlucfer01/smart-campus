import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import "./styles/index.css";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; 
import Home from "./components/Home";
import About from "./components/About";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import Footer from "./components/layouts/Footer.js"
import Announcements from "./components/features/Student/Announcements";
import Notes from "./components/features/Student/Notes";
import Events from "./components/features/Student/Events";
import StudentMarks from "./components/features/Student/StudentMarks";
import MarkEntry from "./components/features/staff/MarkEntry";
import DailyAttendance from "./components/features/staff/DailyAttendance";
import Feedback from "./components/features/staff/Feedback";
import UploadNotes from "./components/features/staff/UploadNotes";
// ✅ Dark Mode Toggle Component


import studentPic from "./assets/image/profile/studentprofile.png";
import staffPic from "./assets/image/profile/staff_profile.png";


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
     <footer>
  Contact: support@example.com | XYZ College
</footer>

    </div>
  );
};
const StudentDashboard = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar/Profile */}
      {showSidebar && (
        <motion.aside
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-64 bg-white border-r shadow-md p-4 hidden md:block"
        >
          <div className="profile-box flex flex-col items-center">
            <img  src={studentPic} alt="Profile" className="w-24 h-24 rounded-full mb-4 profile-pic " />
            <div className="text-center profile-info">
              <p><strong>Name:</strong>Emma </p>
              <p><strong>Dept:</strong> CSE</p>
              <p><strong>Reg No:</strong> 123456</p>
            </div>
          </div>
        </motion.aside>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        {/* Hamburger Menu for smaller screens */}
        <button
          className="md:hidden absolute top-4 left-4 z-50 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>

        <h2 className="student-hub-title  text-3xl font-bold text-blue-600 mb-4">Student Dashboard</h2>

        {/* Navigation */}
        <nav className="nav-bar  flex flex-wrap gap-4 mb-6">
          <Link className=" nav-link text-blue-500 hover:underline" to="/student/announcements">Announcements</Link>
          <Link className=" nav-link text-blue-500 hover:underline" to="/student/notes">Notes</Link>
          <Link className=" nav-link text-blue-500 hover:underline" to="/student/events">Events</Link>
           <Link className=" nav-link text-blue-500 hover:underline" to="/student/StudentMarks">Academy</Link>
         </nav>

        {/* Page transition animation */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

const StaffDashboard = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar/Profile */}
      {showSidebar && (
        <motion.aside
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-64 bg-white border-r shadow-md p-4 hidden md:block"
        >
          <div className="profile-box flex flex-col items-center">
            <img src={staffPic} alt="Profile" className="w-24 h-24 rounded-full mb-4 profile-pic" />
            <div className="text-center profile-info">
              <p><strong>Name:</strong> Dr. Smith</p>
              <p><strong>Dept:</strong> ECE</p>
              <p><strong>Reg No:</strong> S78910</p>
            </div>
          </div>
        </motion.aside>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        {/* Hamburger Menu for smaller screens */}
        <button
          className="md:hidden absolute top-4 left-4 z-50 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? <X size={24} /> : <Menu size={24} />}
        </button>

        <h2 className="text-3xl font-bold text-blue-600 mb-4">Staff Dashboard</h2>

        {/* Navigation */}
        <nav className="nav-bar flex flex-wrap gap-4 mb-6">
          <Link className="nav-link text-blue-500 hover:underline" to="/staff/markentry">Mark Entry</Link>
          <Link className="nav-link text-blue-500 hover:underline" to="/staff/attendance">Attendance</Link>
          <Link className="nav-link text-blue-500 hover:underline" to="/staff/feedback">Feedback</Link>
          <Link className="nav-link text-blue-500 hover:underline" to="/staff/uploadnotes">Upload Notes</Link>
        </nav>

        {/* Page transition animation */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};
// ✅ Footer
const AnimatedRoutes = ({ userType }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUserType={userType} />} />
        {/* Add more routes here as needed */}
      </Routes>
    </AnimatePresence>
  );
};
const App = () => {
  const [userType, setUserType] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Apply dark mode class to <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle dark mode handler
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        {/* Dark Mode Toggle */}
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <AnimatePresence mode="wait">
          <Routes>
            {/* Login */}
            <Route
              path="/"
              element={!userType ? <Login setUserType={setUserType} /> : <Navigate to={`/${userType}`} />}
            />

            {/* Student Dashboard */}
            <Route path="student/*" element={<StudentDashboard />}>
              <Route path="announcements" element={<Announcements />} />
              <Route path="notes" element={<Notes />} />
              <Route path="events" element={<Events />} />
              <Route path="StudentMarks" element={<StudentMarks/>} />
            
            </Route>

            {/* Staff Dashboard */}
            <Route path="staff/*" element={<StaffDashboard />}>
              <Route path="markentry" element={<MarkEntry />} />
              <Route path="attendance" element={<DailyAttendance />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="uploadnotes" element={<UploadNotes />} />
            </Route>
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
};
export default App;

