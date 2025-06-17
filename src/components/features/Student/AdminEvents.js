import React, { useState } from "react";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    image: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();

    if (!form.title || !form.date || !form.description) {
      alert("Title, Date, and Description are required.");
      return;
    }

    setEvents([...events, form]);
    setForm({
      title: "",
      date: "",
      time: "",
      description: "",
      image: "",
      link: "",
    });
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">📋 Add New Event</h2>

        <form
          onSubmit={handleAddEvent}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Event Title"
              className="input-box"
              required
            />
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="input-box"
              required
            />
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              type="time"
              className="input-box"
            />
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL (optional)"
              className="input-box"
            />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Event Description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="Registration Link (optional)"
            className="input-box mt-3"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">📅 Your Events</h3>
          {events.length === 0 ? (
            <p>No events added yet.</p>
          ) : (
            <div className="grid gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
                >
                  <h4 className="text-xl font-bold text-blue-700">{event.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {event.date} | {event.time}
                  </p>
                  <p className="mt-2">{event.description}</p>
                  {event.image && (
                    <img
                      src={event.image}
                      alt="event"
                      className="mt-3 w-full h-48 object-cover rounded-xl"
                    />
                  )}
                  {event.link && (
                    <a
                      href={event.link}
                      className="text-blue-500 underline mt-2 block"
                    >
                      Event Link
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;

