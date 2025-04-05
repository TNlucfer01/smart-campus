import React, { useState } from "react";

const MarkEntry = () => {
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [testName, setTestName] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", marks: "" },
    { id: 2, name: "Jane Smith", marks: "" },
    { id: 3, name: "Alice Johnson", marks: "" },
  ]);

  const handleMarkChange = (id, value) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, marks: value } : student
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ dept, year, subject, testName, students });
    alert("Marks submitted successfully!");
  };

  return (
    <div className="mark-entry-container max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">📄 Mark Entry</h1>

      {/* Selection Fields */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Department Selection */}
          <select className="input-field" value={dept} onChange={(e) => setDept(e.target.value)} required>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="EEE">EEE</option>
            <option value="CIVIL">CIVIL</option>
          </select>

          {/* Year Selection (Now Selectable) */}
          <select className="input-field" value={year} onChange={(e) => setYear(e.target.value)} required>
            <option value="">Select Year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>

          {/* Subject Selection */}
          <select className="input-field" value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="">Select Subject</option>
            <option value="Technology Tamil">Technology Tamil</option>
            <option value="Professional English">Professional English</option>
            <option value="Matrices and Calculus">Matrices and Calculus</option>
            <option value="Engineering Chemistry">Engineering Chemistry</option>
            <option value="Engineering Physics">Engineering Physics</option>
          </select>

          {/* Test Selection */}
          <select className="input-field" value={testName} onChange={(e) => setTestName(e.target.value)} required>
            <option value="">Select Test</option>
            <option value="IAT-1">IAT-1</option>
            <option value="IAT-2">IAT-2</option>
            <option value="IAT-3">IAT-3</option>
            <option value="Model-1">Model-1</option>
            <option value="Model-2">Model-2</option>
            <option value="Revision-1">Revision-1</option>
            <option value="Revision-2">Revision-2</option>
          </select>
        </div>

        {/* Student Marks Table */}
        <table className="student-table w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Student Name</th>
              <th className="border p-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="input-box w-full text-center text-black bg-white border border-gray-300 p-1"
                    value={student.marks}
                    onChange={(e) => handleMarkChange(student.id, e.target.value)}
                    min="0"
                    max="100"
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Submit Button */}
        <button type="submit" className="submit-btn w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Submit Marks
        </button>
      </form>
    </div>
  );
};

export default MarkEntry;

