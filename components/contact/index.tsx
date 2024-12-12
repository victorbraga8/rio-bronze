"use client";

import Image from "next/image";
import React from "react";

export default function Contact({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="relative text-white py-10"
      style={{
        backgroundImage: 'url("/footer.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        <div>
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/logo.png"
              alt="garota-rio-bronze"
              width={360}
              height={360}
            />
          </div>

          <p className="text-lg">
            Valorizar a diversidade da nossa beleza, forma e preferência.
            Convido vocês a conhecerem o seu lugar de bem-estar e autoestima em
            Copacabana.
          </p>
          <h3 className="text-2xl font-bold mt-8">Endereço</h3>
          <p className="text-lg mt-2">
            Av. Nossa Sra. de Copacabana, 680 - Copacabana, Rio de Janeiro - RJ,
            22050-001
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1733954878316!6m8!1m7!1sjgC4SRTUylU2zPmY--MV_g!2m2!1d-22.9709005539697!2d-43.18665863043721!3f327.05!4f0!5f0.7820865974627469"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg relative z-10">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Entre em Contato
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-900 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
