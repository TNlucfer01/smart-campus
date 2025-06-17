import React, { useState } from "react";

const DeptYear = () => {
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const departments = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "IT"];
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  return (
    <div className="  min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="event-box  max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">🎓 Department & Year</h1>
        <p className="text-lg mb-8">
          Select your department and year to access relevant academic resources.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Department</label>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="">-- Select Department --</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 dark:bg-gray-800 dark:border-gray-600"
            >
              <option value="">-- Select Year --</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {selectedDept && selectedYear && (
            <div className="mt-6 p-4 rounded-xl bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              You selected <strong>{selectedDept}</strong> - <strong>{selectedYear}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeptYear;

