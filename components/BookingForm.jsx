// File: components/BookingForm.jsx
"use client";

import { useState } from "react";
import sendEmail from "@/lib/sendEmail";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    vehicle: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("Message sent successfully.");
      setFormData({ name: "", email: "", phone: "", date: "", vehicle: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-2 border rounded" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="vehicle" value={formData.vehicle} onChange={handleChange} placeholder="Vehicle Model" className="w-full p-2 border rounded" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Booking</button>

      {status === 'success' && (
        <p className="text-green-600 bg-green-100 p-2 mt-2 rounded-md shadow-md">
          ✉️ Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 bg-red-100 p-2 mt-2 rounded-md shadow-md">
          ⚠️ Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
}
