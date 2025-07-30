// Directory: components/ThemeToggle.jsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 rounded border dark:border-white"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
