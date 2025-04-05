import React, { useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!title || !message || !date) {
      alert("Please fill in all fields.");
      return;
    }

    const newAnnouncement = {
      title,
      message,
      date,
    };

    setAnnouncements([newAnnouncement, ...announcements]); // Add new announcement to the list

    // Clear input fields after adding
    setTitle("");
    setMessage("");
    setDate("");
  };

  return (
    <div className="announcements-container">
      <h1 className="announcement-title">📢 Add Announcement</h1>
      <form onSubmit={handleAddAnnouncement} className="announcement-form">
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <button type="submit" className="submit-btn">Add Announcement</button>
      </form>

      {/* Display Announcements */}
      <div className="announcement-list">
        <h2>📜 Recent Announcements</h2>
        {announcements.length === 0 ? (
          <p>No announcements yet.</p>
        ) : (
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>
                <strong>{announcement.title}</strong> ({announcement.date})<br />
                <span>{announcement.message}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Announcements;

