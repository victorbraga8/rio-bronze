import "photoswipe/style.css";
import Image from "next/image";

export default function CarouselImg() {
  const images = [{ src: "/slide-1.jpg", width: 1920, height: 1080 }];

  return (
    <div className="relative w-screen h-[80vh] bg-[#f4e2d8]">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/logo.png"
          alt="Garota Rio Bronze Logo"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-screen h-full">
          {images.map((image, index) => (
            <div key={index} className="w-full h-full">
              <div className="w-full h-full">
                <div className="flex items-center justify-center w-full h-full">
                  <Image
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="responsive-image"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
