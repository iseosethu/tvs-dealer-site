// File: /app/admin/messages/page.jsx

'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@firebase';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contactMessages'));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Form Submissions</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className="border border-gray-300 dark:border-gray-700 p-4 rounded shadow"
            >
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Phone:</strong> {msg.phone}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Submitted: {new Date(msg.timestamp?.seconds * 1000).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
