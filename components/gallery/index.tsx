"use client";
import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function CustomGallery({ id }: { id: string }) {
  const images: string[] = [
    "/slide-0.jpg",
    "/slide-2.jpg",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-5.jpg",
    "/slide-6.jpg",
  ];

  return (
    <div id={id}>
      {/* Gallery */}
      <Gallery>
        <div className="grid grid-cols-3">
          {images.map((image, index) => (
            <Item
              key={index}
              original={image}
              thumbnail={image}
              width="800"
              height="600"
            >
              {({ ref, open }) => (
                <div
                  ref={ref}
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={open} // Abrir Lightbox ao clicar
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
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </div>
  );
}
