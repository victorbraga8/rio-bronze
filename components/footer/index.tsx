"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-1">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo-garota-rio.png" // Substitua pelo caminho real da logo
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Desenvolvido por */}
        <p className="text-sm">
          Desenvolvido por{" "}
          <a
            href="https://seulink.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-600"
          >
            Soluções sem Fronteiras
          </a>
        </p>
      </div>
    </footer>
  );
}
