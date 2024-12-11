"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Gallery({ id }: { id: string }) {
  const images: string[] = [
    "/slide-0.jpg",
    "/slide-2.jpg",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-5.jpg",
    "/slide-6.jpg",
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
    <div id={id}>
      {/* Gallery */}
      <div className="grid grid-cols-3 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => openLightbox(image)} // Abrir Lightbox ao clicar
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-auto"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
              <Image
                src="/logo-garota-rio.png" // Substitua pelo caminho da sua logo
                alt="Logo"
                width={160}
                height={160}
                className="opacity-70"
              />
            </div>
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
