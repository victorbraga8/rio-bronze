"use client";
import { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false); // Fecha o menu ao clicar em um item
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-orange-600 text-white px-4 py-2 shadow-md">
      {/* Logo na faixa */}
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Garota do Rio Bronze"
          width={100}
          height={100}
          className="md:hidden block"
        />
        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu Dropdown */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out bg-orange-700 flex justify-center`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 w-full">
          {[
            ["home", "HOME"],
            ["faq", "DÚVIDAS"],
            ["studio1", "PACOTES"],
            ["gallery", "FOTOS"],
            ["studio2", "NOSSO ESPAÇO"],
            ["contact", "CONTATOS"],
          ].map(([id, label], index) => (
            <li
              key={`${id}-${index}`}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer ${
                activeSection === id
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu em telas maiores */}
      <div className="hidden md:flex justify-between items-center px-4 md:px-40">
        <ul className="flex space-x-6">
          {[
            ["home", "HOME"],
            ["faq", "DÚVIDAS"],
            ["studio1", "PACOTES"],
          ].map(([id, label], index) => (
            <li
              key={`${id}-${index}`}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer ${
                activeSection === id
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
        <Image
          src="/logo.png"
          alt="Garota do Rio Bronze"
          width={100}
          height={100}
          className="mx-8"
        />
        <ul className="flex space-x-6">
          {[
            ["gallery", "FOTOS"],
            ["studio2", "NOSSO ESPAÇO"],
            ["contact", "CONTATOS"],
          ].map(([id, label], index) => (
            <li
              key={`${id}-${index}`}
              onClick={() => scrollToSection(id)}
              className={`cursor-pointer ${
                activeSection === id
                  ? "text-white underline"
                  : "hover:text-yellow-300"
              }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
