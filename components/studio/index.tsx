"use client";

import React from "react";
import Image from "next/image";

export default function StudioSection() {
  return (
    <div className="bg-orange-800 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-10 px-6 gap-8">
        {/* Imagem */}
        <div className="relative w-full h-[300px] lg:h-[400px]">
          <Image
            src="/studio-mock.png" // Substitua pelo caminho da sua imagem
            alt="Studio Corpo e Bronze"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority // Carregamento otimizado
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Studio Garota Rio Bronze</h2>
          <p className="text-lg">
            <span className="font-semibold">Bronzeamento Artificial</span>{" "}
            Personalizado: Você Escolhe!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-300 font-bold mr-2">✔</span> Pacotes
              Especiais
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span> Biquini
              de fita
            </li>
            <li className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✔</span> Resultado
              Eficaz
            </li>
          </ul>
          <button className="bg-green-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-600 transition">
            FALE CONOSCO
          </button>
        </div>
      </div>
    </div>
  );
}
