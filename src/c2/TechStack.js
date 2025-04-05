import React from "react";

const TechStack = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-4xl font-bold text-blue-600">How We Built SmartCampus – Tech Overview</h2>
      <ul className="mt-6 text-lg text-gray-800 space-y-3">
        <li>✅ Frontend: React Native / Flutter</li>
        <li>✅ Backend: Node.js + Express.js</li>
        <li>✅ Database: Firebase / PostgreSQL</li>
        <li>✅ AI Chatbot: OpenAI API / Dialogflow</li>
      </ul>
    </div>
  );
};

export default TechStack;


