"use client";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home"); // Gerencia a seção ativa

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); // Define a seção como ativa
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
              className={`cursor-pointer ${
                activeSection === "home"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              HOME
            </li>
            <li
              onClick={() => scrollToSection("faq")}
              className={`cursor-pointer ${
                activeSection === "faq"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              DÚVIDAS
            </li>
            <li
              onClick={() => scrollToSection("studio")}
              className={`cursor-pointer ${
                activeSection === "studio"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
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
              className={`cursor-pointer ${
                activeSection === "gallery"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              FOTOS
            </li>
            <li
              onClick={() => scrollToSection("studio")}
              className={`cursor-pointer ${
                activeSection === "studio"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              NOSSO ESPAÇO
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className={`cursor-pointer ${
                activeSection === "contact"
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              CONTATOS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
