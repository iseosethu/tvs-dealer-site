// components/ContactSection.jsx
"use client";

import { useState } from "react";
import { sendEmail } from "../lib/sendEmail";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await sendEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
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
    </section>
  );
}
