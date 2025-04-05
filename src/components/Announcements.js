import React from "react";

const Announcements = () => {
  const announcements = [
    {
      title: "Midterm Exams Schedule Released",
      date: "April 5, 2025",
      details:
        "Attention students! The official midterm exam schedule has been released, and all students are advised to check the student portal immediately for their specific timetable. It is crucial to be well-prepared and aware of your examination dates to avoid any last-minute confusion. If you have any conflicts or issues with your schedule, please reach out to the examination office before the deadline. Best of luck with your preparations!",
    },
    {
      title: "Guest Lecture on AI Ethics",
      date: "April 8, 2025",
      details:
        "We are excited to invite all students and faculty members to an enlightening guest lecture on 'Ethics in Artificial Intelligence,' delivered by the esteemed Dr. Priya Sharma, a leading expert in AI ethics and responsible AI development. This session will explore critical topics such as bias in AI models, ethical considerations in AI decision-making, and the role of regulations in AI advancements. The lecture will be held in Seminar Hall A at 11:00 AM, followed by an interactive Q&A session. Don't miss this opportunity to enhance your understanding of ethical AI practices!",
    },
    {
      title: "Last Date for Fee Payment",
      date: "April 10, 2025",
      details:
        "This is an important reminder for all students that the final deadline for tuition fee payment is April 10, 2025. Please ensure that all dues are cleared before this date to avoid late penalties and potential restrictions on accessing academic resources, including examination registration and library services. Payments can be made through the student portal or at the administrative office during working hours. If you face any financial difficulties or require assistance, please consult the finance department for possible solutions. Don't wait until the last minute—act now to avoid unnecessary complications!",
    },
  ];

  return (
    <div className="announcements min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="announcement-container max-w-4xl mx-auto fullscreen-events" style={{ background: "white" }}>
        <h1 style={{ color: "black" }} className="text-4xl font-bold text-blue-600 mb-8 text-center">
          📢 Announcements
        </h1>

        <p className="text-box text-center text-lg mb-10">
          Stay updated with the latest news and important updates from the college administration.
        </p>

        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-teal-600">{announcement.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{announcement.date}</p>
              <p>{announcement.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;

