"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const images: string[] = [
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
    "/slide-1.jpg",
  ];

  const [isLightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const openLightbox = (image: string): void => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = (): void => {
    setLightboxOpen(false);
    setCurrentImage(null);
  };

  return (
    <div>
      {/* Gallery */}
      <div className="w-full flex justify-between">
        {images.map((image, index) => (
          <div key={index} className="w-1/6 cursor-pointer">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={200}
              height={120}
              className="object-cover w-full h-auto"
              onClick={() => openLightbox(image)} // Abrir Lightbox ao clicar
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && currentImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox} // Fechar ao clicar fora da imagem
        >
          <div className="relative">
            <Image
              src={currentImage}
              alt="Lightbox Image"
              width={800}
              height={500}
              className="object-contain max-w-full max-h-full"
              priority // Priorizar o carregamento da imagem
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
