"use client";

import { useState } from "react";
import handleFormSubmit from "@/lib/handleFormSubmit";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFormSubmit(formData, "contact", setStatus, setError);
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">Thank you! Your message was sent.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Error: {error || "Something went wrong."}</p>
      )}
    </section>
  );
}
