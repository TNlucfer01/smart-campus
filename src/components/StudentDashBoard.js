import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`flex h-screen ${isSidebarOpen ? "" : "collapsed"}`}>
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 p-4 transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-4">Student Dashboard</h2>
        <nav className="space-y-2">
          <Link className="block p-2 rounded hover:bg-gray-700" to="announcements">📢 Announcements</Link>
          <Link className="block p-2 rounded hover:bg-gray-700" to="deptyear">🏫 Dept/Year</Link>
          <Link className="block p-2 rounded hover:bg-gray-700" to="notes">📄 Notes</Link>
          <Link className="block p-2 rounded hover:bg-gray-700" to="events">📅 Events</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow-md">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-gray-300 dark:bg-gray-700 rounded md:hidden"
          >
            ☰
          </button>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Welcome, Student</h2>
          <DarkModeToggle />
        </header>

        {/* Content Area */}
        <main className="flex-1 mt-4 bg-white dark:bg-gray-800 p-6 rounded shadow-md">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;

