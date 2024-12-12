"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselImg() {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    // Adicione mais lógica aqui se necessário
  }, [api]);

  return (
    <div className="w-screen h-[80vh]">
      <Carousel setApi={setApi} className="flex w-full h-full">
        <CarouselContent className="flex w-screen h-full">
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center p-6 w-full h-full">
                  <Image
                    src="/slide-1.jpg"
                    alt="garota rio bronze"
                    layout="fill"
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
