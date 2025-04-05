import React, { useState } from "react";

const UploadNotes = () => {
  const [notes, setNotes] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file || !title || !department || !year || !subject) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    const newNote = {
      title,
      subject,
      department,
      year,
      fileName: file.name,
      fileURL: URL.createObjectURL(file),
    };

    setNotes([...notes, newNote]);

    // Clear fields
    setTitle("");
    setSubject("");
    setDepartment("");
    setYear("");
    setFile(null);
  };

  return (
    <div className="upload-notes-container max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="upload-title text-xl font-bold text-center text-indigo-600 mb-4">
        📄 Upload Notes
      </h1>

      <form onSubmit={handleUpload} className="upload-form grid gap-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="input-field p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Department */}
        <select
          className="input-field p-2 border rounded"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select>

        {/* Year */}
        <select
          className="input-field p-2 border rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option value="">Select Year</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          className="input-field p-2 border rounded"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        {/* File Upload */}
        <input
          type="file"
          className="input-field"
          onChange={handleFileChange}
          required
        />

        <button
          type="submit"
          className="submit-btn bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {/* Uploaded Notes Display */}
      <div className="notes-list mt-6">
        <h2 className="font-semibold text-lg mb-2">📚 Uploaded Notes</h2>
        {notes.length === 0 ? (
          <p className="text-gray-500">No notes uploaded yet.</p>
        ) : (
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded shadow-sm">
                <strong>{note.title}</strong> — {note.subject} (
                {note.department}, {note.year}){" "}
                <a
                  href={note.fileURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 ml-2 underline"
                >
                  📂 View
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UploadNotes;

