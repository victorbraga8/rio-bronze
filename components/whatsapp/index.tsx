import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5522988298031"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 left-4 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
