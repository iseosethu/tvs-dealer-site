// Directory: components/Navbar.jsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">TVS Motors</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/branches" className="hover:underline">Branches</Link>
        <Link href="/vehicles" className="hover:underline">Vehicles</Link>
        <Link href="/booking" className="hover:underline">Booking</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded"
      >
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
}
