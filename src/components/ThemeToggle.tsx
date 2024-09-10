// src/components/ThemeToggle.tsx
'use client';
import React from "react";

const ThemeToggle = () => {
  const handleToggle = () => {
    console.log("Button clicked"); // Ensure this log appears
    // Call toggleTheme function here
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={handleToggle} className="p-2 text-sm bg-gray-300 dark:bg-gray-700 rounded-md">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
