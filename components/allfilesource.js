// Directory: app/page.jsx (Home)
export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Welcome to TVS Brilliant Motors</h1>
      <p className="mt-2">Your trusted TVS two-wheeler dealer in Chennai.</p>
    </main>
  );
}

// Directory: app/about/page.jsx
export default function About() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      <p className="mt-2">We are an authorized TVS dealer with years of experience in providing quality service and vehicles.</p>
    </main>
  );
}

// Directory: app/contact/page.jsx
export default function Contact() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p className="mt-2">Visit us at Mandaveli, Chennai or call us at +91-9876543210</p>
    </main>
  );
}

// Directory: app/branches/page.jsx
export default function Branches() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Our Branches</h1>
      <ul className="mt-4 list-disc list-inside">
        <li>Mandaveli</li>
        <li>Mylapore</li>
        <li>Adyar</li>
        <li>Velachery</li>
      </ul>
    </main>
  );
}

// Directory: app/vehicles/page.jsx
export default function Vehicles() {
  const vehicles = [
    { name: "TVS Apache", img: "/images/apache.jpg" },
    { name: "TVS Jupiter", img: "/images/jupiter.jpg" },
    { name: "TVS Ntorq", img: "/images/ntorq.jpg" }
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Vehicles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vehicles.map((v, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow-md">
            <img src={v.img} alt={v.name} className="w-full h-48 object-cover" />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{v.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// Directory: app/booking/page.jsx
'use client';
import { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', vehicle: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'bookings'), form);
    alert('Booking submitted successfully!');
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Vehicle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="vehicle" placeholder="Vehicle Model" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="date" name="date" onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </main>
  );
}

// Directory: firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Directory: .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mblkyqgl
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBSBP7eef_DdEE9_59zohg1P51mzqz48KQ
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=project1-544de.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project1-544de
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=project1-544de.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=679446737257
NEXT_PUBLIC_FIREBASE_APP_ID=1:679446737257:web:f58ad9cc9b04d98a40cdf8

// Directory: package.json
{
  "name": "tvs-dealer-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.4.12",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "firebase": "9.22.0",
    "tailwindcss": "3.4.1",
    "postcss": "8.4.21",
    "autoprefixer": "10.4.14"
  }
}
