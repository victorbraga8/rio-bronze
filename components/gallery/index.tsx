"use client";
import React from "react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Image
            src={image}
            alt={`Gallery Image ${index + 1}`}
            width={600}
            height={400}
            className="gallery-item-image"
          />
        </div>
      ))}
    </div>
  );
}
