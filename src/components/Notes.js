import React, { useState } from "react";
import { motion } from "framer-motion";

const Notes = () => {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");

const notesData = [
  // Existing notes
  {
    dept: "CSE",
    year: "2",
    subject: "DSA",
    title: "DSA Notes - Unit 1",
    file: "/notes/DSA_Unit1.pdf",
  },
  {
    dept: "CSE",
    year: "2",
    subject: "OS",
    title: "Operating System Notes - Intro",
    file: "/notes/OS_Intro.pdf",
  },
  {
    dept: "ECE",
    year: "1",
    subject: "Physics",
    title: "Basic Physics Notes",
    file: "/notes/Physics_Basics.pdf",
  },

  // First Year common subjects for all departments
  ...["CSE", "ECE", "MECH", "IT", "AIDS", "EEE"].flatMap((dept) => [
    {
      dept,
      year: "1",
      subject: "Technology Tamil",
      title: `${dept} - 1st Year Technology Tamil Notes`,
      file: `/notes/${dept}_TechTamil.pdf`,
    },
    {
      dept,
      year: "1",
      subject: "Professional English",
      title: `${dept} - 1st Year Professional English Notes`,
      file: `/notes/${dept}_English.pdf`,
    },
    {
      dept,
      year: "1",
      subject: "Matrices and Calculus",
      title: `${dept} - 1st Year Matrices and Calculus Notes`,
      file: `/notes/${dept}_Maths.pdf`,
    },
    {
      dept,
      year: "1",
      subject: "Engineering Chemistry",
      title: `${dept} - 1st Year Engineering Chemistry Notes`,
      file: `/notes/${dept}_Chemistry.pdf`,
    },
    {
      dept,
      year: "1",
      subject: "Engineering Physics",
      title: `${dept} - 1st Year Engineering Physics Notes`,
      file: `/notes/${dept}_Physics.pdf`,
    },
  ]),
];

  const filteredNotes = notesData.filter(
    (note) =>
      note.dept === department &&
      note.year === year &&
      note.subject.toLowerCase() === subject.toLowerCase()
  );

  return (
    <motion.div
      className="fullscreen-notes"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="notes-title">📚 Student Notes</h2>

      <div className="note-selectors">
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="MECH">MECH</option>
          <option value="IT">IT</option>
          <option value="AIDS">AIDS</option>
          <option value="EEE">EEE</option>
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <input
          style={{ color: "black" }}
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="note-list">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <motion.div
              className="note-card"
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{note.title}</h3>
              <a className="download-btn" href={note.file} download>
                📥 Download
              </a>
            </motion.div>
          ))
        ) : (
          <p className="no-note-msg">No notes found for the selected criteria.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Notes;

