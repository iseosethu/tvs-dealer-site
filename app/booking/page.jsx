// Directory: app/booking/page.jsx
'use client';
import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', date: '' });
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'bookings'), {
        ...form,
        created: Timestamp.now()
      });
      setSuccess('Booking submitted successfully!');
      setForm({ name: '', phone: '', date: '' });
    } catch (err) {
      setSuccess('Submission failed. Try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Book a Test Ride / Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {success && <p className="mt-4 text-green-600">{success}</p>}
    </div>
  );
}

