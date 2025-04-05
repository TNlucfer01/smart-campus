import React from "react";

const Features = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-800">Key Features</h2>
      <ul className="mt-6 text-lg text-gray-700 space-y-3">
        <li>📚 Faculty Contribution System</li>
        <li>👥 Student & Faculty Profiles</li>
        <li>📅 Timetable, Attendance & Exam Management</li>
        <li>📢 Announcements & Chat System</li>
        <li>🤖 AI Chatbot for FAQs</li>
      </ul>
    </div>
  );
};

export default Features;

