import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button 
            className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;

