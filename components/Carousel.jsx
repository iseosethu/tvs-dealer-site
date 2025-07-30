// Directory: components/Carousel.jsx
'use client';
import { useState } from 'react';

const images = [
  '/images/apache.jpg',
  '/images/jupiter.jpg',
  '/images/ntorq.jpg'
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images[current]}
        alt="Vehicle"
        className="w-full h-full object-cover rounded"
      />
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 px-2 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 px-2 py-1 rounded"
      >
        ›
      </button>
    </div>
  );
}