import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Announcements from "./components/Announcements";
import DeptYear from "./components/DeptYear";
import Notes from "./components/Notes";
import Events from "./components/Events";
import MarkEntry from "./staff/MarkEntry";
import DailyAttendance from "./staff/DailyAttendance";
import Feedback from "./staff/Feedback";
import UploadNotes from "./staff/UploadNotes";
import StaffProfile from "./staff/StaffProfile";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const AppRoutes = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={!userType ? <Login setUserType={setUserType} /> : <Navigate to={`/${userType}`} />} />
        
        {/* Student Dashboard Routes */}
        <Route path="student/*" element={<StudentDashboard />}>
          <Route path="announcements" element={<Announcements />} />
          <Route path="deptyear" element={<DeptYear />} />
          <Route path="notes" element={<Notes />} />
          <Route path="events" element={<Events />} />
        </Route>

        {/* Staff Dashboard Routes */}
        <Route path="staff/*" element={<StaffDashboard />}>
          <Route path="markentry" element={<MarkEntry />} />
          <Route path="attendance" element={<DailyAttendance />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="uploadnotes" element={<UploadNotes />} />
          <Route path="profile" element={<StaffProfile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

