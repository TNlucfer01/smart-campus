import { useState, useEffect } from "react";
import "../../../styles/StudentMarks.css";

const StudentMarks = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    // Fetch marks data (Replace with actual API call)
    const fetchedMarks = [
      { subject: "Mathematics", testName: "Midterm", score: 85, total: 100 },
      { subject: "Physics", testName: "Quiz 1", score: 18, total: 20 },
      { subject: "Chemistry", testName: "Final Exam", score: 92, total: 100 },
    ];
    setMarks(fetchedMarks);
  }, []);

  return (
    <div className="marks-container">
      <h2 className="marks-title">📚 Student Marks</h2>
      {marks.length > 0 ? (
        <table className="marks-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Test Name</th>
              <th>Score</th>
              <th>Total Marks</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((mark, index) => (
              <tr key={index}>
                <td>{mark.subject}</td>
                <td>{mark.testName}</td>
                <td>{mark.score}</td>
                <td>{mark.total}</td>
                <td>{((mark.score / mark.total) * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-marks">No marks available.</p>
      )}
    </div>
  );
};

export default StudentMarks;

