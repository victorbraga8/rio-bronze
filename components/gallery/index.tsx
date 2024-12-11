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
    <div className="w-full flex justify-between">
      {images.map((image, index) => (
        <div key={index} className="w-1/6">
          <Image
            src={image}
            alt={`Gallery Image ${index + 1}`}
            width={200} // Ajuste para garantir o tamanho correto
            height={120} // Ajuste para garantir o tamanho correto
            className="object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
