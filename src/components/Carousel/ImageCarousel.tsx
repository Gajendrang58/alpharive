'use client';

import { useRef } from 'react';
import Image from 'next/image';

const images: string[] = [
  '/apple.png',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
      >
        &#8592;
      </button>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-4 p-4"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-none w-72 h-48 relative">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg"
      >
        &#8594;
      </button>
    </div>
  );
}