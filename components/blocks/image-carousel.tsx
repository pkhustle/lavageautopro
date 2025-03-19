"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Array of all images from the public/images folder
const carouselImages = [
  "/images/auto-2179220_1280.jpg",
  "/images/automobile-2875254_1280.jpg",
  "/images/car-63930_1280.jpg",
  "/images/car-7291166_1280.jpg",
  "/images/car-7955720_1920.jpg",
  "/images/cleaning-1837328_1280.jpg",
  "/images/cleaning-1837331_1280.jpg",
  "/images/dashboard-3510327_1280.jpg",
  "/images/gearstick-7740670_1280.jpg",
  "/images/red-255110_1280.jpg",
  "/images/wash-5144822_1280.jpg",
  "/images/wash-a-car-1822415_1280.jpg",
  "/images/washing-car-1397382_1280.jpg"
];

interface ImageCarouselProps {
  className?: string;
  imageCount?: number; // Number of random images to show
}

export function ImageCarousel({ className = "", imageCount = 3 }: ImageCarouselProps) {
  // Get random images from the array
  const getRandomImages = () => {
    const shuffled = [...carouselImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, imageCount);
  };
  
  const [images] = useState(getRandomImages());
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Service image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
