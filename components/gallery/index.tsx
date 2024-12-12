"use client";
import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function CustomGallery({ id }: { id: string }) {
  const images: { src: string; width: number; height: number }[] = [
    { src: "/slide-0.jpg", width: 1200, height: 1600 },
    { src: "/slide-2.jpg", width: 1200, height: 1600 },
    { src: "/slide-3.jpg", width: 1200, height: 1600 },
    { src: "/slide-4.jpg", width: 1200, height: 1600 },
    { src: "/slide-5.jpg", width: 1200, height: 1600 },
    { src: "/slide-6.jpg", width: 1200, height: 1600 },
  ];

  return (
    <div id={id}>
      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {images.map((image, index) => (
            <Item
              key={index}
              original={image.src}
              thumbnail={image.src}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <div
                  ref={ref}
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={open}
                >
                  <div id="imgContainer">
                    <Image
                      src={image.src}
                      alt={`Gallery Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                    <Image
                      src="/logo-garota-rio.png"
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
