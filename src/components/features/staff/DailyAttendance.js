import React, { useState } from "react";

const Attendance = () => {
  const [attendance, setAttendance] = useState({});
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  const students = [
    { id: 1, name: "John Doe", regNo: "CSE001" },
    { id: 2, name: "Jane Smith", regNo: "CSE002" },
    { id: 3, name: "Alice Johnson", regNo: "CSE003" },
  ];

  const handleAttendanceChange = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      department,
      year,
      subject,
      date,
      attendance,
    });
    alert("Attendance has been submitted successfully!");
  };

  return (
    <div className="attendance-container max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="attendance-title text-2xl font-bold text-blue-600 text-center mb-4">
        📅 Attendance Marking
      </h1>

      <form onSubmit={handleSubmit} className="attendance-form">
        {/* Department */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            className="input-field"
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
            className="input-field"
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
            className="input-field"
            type="text"
            placeholder="Enter Subject Name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          {/* Date */}
          <input
            className="input-field"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Attendance Table */}
        <table className="student-table w-full border-collapse border border-gray-300 mb-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Reg No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border p-2">{student.regNo}</td>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      value="Present"
                      onChange={() =>
                        handleAttendanceChange(student.id, "Present")
                      }
                      required
                    />{" "}
                    Present
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`attendance-${student.id}`}
                      value="Absent"
                      onChange={() =>
                        handleAttendanceChange(student.id, "Absent")
                      }
                      required
                    />{" "}
                    Absent
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="submit"
          className="submit-btn w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
};

export default Attendance;

