import { useState } from "react";
import "./Feedback.module.css";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedbackData.name || !feedbackData.email || !feedbackData.message) {
      alert("All fields are required.");
      return;
    }
    console.log("Feedback Submitted:", feedbackData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Feedback Form</h2>
      {submitted ? (
        <p className="text-green-600 text-center text-lg">✅ Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={feedbackData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={feedbackData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Feedback:</label>
            <textarea
              name="message"
              value={feedbackData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Rating:</label>
            <select
              name="rating"
              value={feedbackData.rating}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="5">⭐️⭐️⭐️⭐️⭐️ - Excellent</option>
              <option value="4">⭐️⭐️⭐️⭐️ - Good</option>
              <option value="3">⭐️⭐️⭐️ - Average</option>
              <option value="2">⭐️⭐️ - Poor</option>
              <option value="1">⭐️ - Bad</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;

