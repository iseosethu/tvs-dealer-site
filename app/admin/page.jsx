"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p className="p-4">Loading messages...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📩 Contact & Booking Submissions</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className="border p-4 rounded-md bg-gray-50 dark:bg-gray-800">
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Phone:</strong> {msg.phone || "-"}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500 mt-2">Submitted: {msg.timestamp || "-"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
