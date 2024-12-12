import { CarouselImg } from "@/components/carousel";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";

import { Header } from "@/components/navigation/header";
import Services from "@/components/services";
import StudioSection from "@/components/studio";
import { MessageCircleHeart, Send, Wallet } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Header />
      <div id="home" className="flex-grow">
        <CarouselImg />
      </div>
      <Services />
      <div className="bg-orange-500 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white px-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center gap-4">
            <Send />
            <span className="text-lg md:text-xl font-bold">Aceitamos PIX</span>
          </div>
          <div className="flex items-center gap-4">
            <MessageCircleHeart />
            <span className="text-lg md:text-xl font-bold">
              AMADO por milhares ao redor do mundo.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Wallet />
            <span className="text-lg md:text-xl font-bold">
              Até 3x sem juros*
            </span>
          </div>
        </div>
      </div>
      <Gallery id="gallery" />
      <Faq id="faq" />
      <StudioSection id="studio" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
