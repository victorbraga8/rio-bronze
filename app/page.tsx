import { CarouselImg } from "@/components/carousel";
import Gallery from "@/components/gallery";

import { Header } from "@/components/navigation/header";
import Services from "@/components/services";
import { MessageCircleHeart, Send, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-grow">
        <CarouselImg />
      </div>
      <Services />
      <div className="bg-[#E0F2F7] py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-blue-800 px-4">
          <div className="flex items-center gap-4">
            <Send />
            <span>Aceitamos PIX</span>
          </div>

          <div className="flex items-center gap-4">
            <MessageCircleHeart />
            <span>AMADO por milhares ao redor do mundo.</span>
          </div>

          <div className="flex items-center gap-4">
            <Wallet />
            <span>Até 3x sem juros*</span>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}
