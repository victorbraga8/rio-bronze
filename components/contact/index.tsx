"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="bg-teal-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        {/* Informações */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Cabine de Bronze Ferrari – 30 Lâmpadas
          </h2>
          <p className="text-lg">
            A máquina de bronze mais potente do mercado, recomendada para todo
            tipo de pele: claras, morenas, bronzeadas e negras.
          </p>
          <p className="mt-4 text-sm italic">
            * Mínimo 2 sessões para um excelente resultado.
          </p>
          <h3 className="text-2xl font-bold mt-8">Endereço</h3>
          <p className="text-lg mt-2">
            R. Salomão Dana, 65 – Sala 4 – Vila Buenos Aires – São Paulo – SP,
            03624-050
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7346826341544!2d-46.53136012488179!3d-23.573088667568592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e7b47f25d8b%3A0xdf2afc8653a0d1f4!2sISA%20Bronze%20-%20Bronzeamento%20artificial!5e0!3m2!1sen!2sbr!4v1677600585543!5m2!1sen!2sbr"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-teal-900">
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
              className="bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
