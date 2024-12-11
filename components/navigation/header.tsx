/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";

export const Header = () => {
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-orange-600 text-white px-40 py-2 shadow-md">
      <div className="flex items-center justify-between">
        {/* Menu Esquerdo */}
        <div className="flex justify-start">
          <ul className="flex space-x-6">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer"
            >
              HOME
            </li>
            <li
              onClick={() => scrollToSection("faq")}
              className="cursor-pointer"
            >
              DÚVIDAS
            </li>
            <li
              onClick={() => scrollToSection("studio")}
              className="cursor-pointer"
            >
              PACOTES
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="garota rio bronze"
            width={150}
            height={150}
          />
        </div>

        {/* Menu Direito */}
        <div className="flex justify-end">
          <ul className="flex space-x-6">
            <li
              onClick={() => scrollToSection("gallery")}
              className="cursor-pointer"
            >
              FOTOS
            </li>
            <li
              onClick={() => scrollToSection("studio")}
              className="cursor-pointer"
            >
              NOSSO ESPAÇO
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              CONTATOS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
