import React from "react";
import culturalImage from "./../assets/events/cultural.png";
import projectExpo from "./../assets/events/project_expo.png";
import aimlworkshop from "./../assets/events/workshop.png";

const Events = () => {
  const events = [
    {
      title: "Sci-Tech Expo 2025 - A National Level Event 🚀",
      date: "April 5, 2025",
      time: "10:00 AM - 5:00 PM",
      description:
        "The MPEC Forum proudly presents Sci-Tech Expo 2025, an exciting national-level event hosted by P.T. Lee Chengalvaraya Naicker College of Engineering & Technology. Organized by the Department of Science and Humanities, this expo brings together engineering minds from across the country to showcase their talent, innovation, and technical expertise.\n\nWith exciting prizes up for grabs, participants will present their projects in various fields, including AI, Robotics, 3D Printing, Renewable Energy, Cyber Security, Quantum Computing, and more. Open to all engineering students, the event encourages participants to submit 3D models, working models, posters, and reports to demonstrate cutting-edge technological advancements.",
      registrationDeadline: "March 31, 2025",
      image: projectExpo,
      registrationLink: "https://forms.gle/mYapUELPvk78rqkR8", // Replace with actual registration link
    },
    {
      title: "Cultural Night",
      date: "May 5, 2025",
      time: "6:00 PM - 9:00 PM",
      description:
        "An evening filled with music, dance, and performances showcasing the talents of our students.",
      image: culturalImage,
      registrationLink: "https://example.com/register-cultural-night",
    },
    {
      title: "Workshop: AI & ML",
      date: "May 15, 2025",
      time: "2:00 PM - 5:00 PM",
      description:
        "Hands-on workshop on Artificial Intelligence and Machine Learning. Limited seats available!",
      image: aimlworkshop,
      registrationLink: "https://example.com/register-aiml-workshop",
    },
  ];

  return (
    <div className="fullscreen-events">
      <h2 className="text-4xl font-bold text-blue-600">🎉 Upcoming Events</h2>
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.image} alt={event.title} />
          <h3>{event.title}</h3>
          <div className="event-meta">
            📅 {event.date} | ⏰ {event.time}
          </div>
          <p>{event.description}</p>
          <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register Now</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Events;

