import Image from "next/image";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-orange-600 text-white px-40 py-2 shadow-md">
      <div className="flex items-center justify-between">
        {/* Menu Esquerdo */}
        <div className="flex justify-start">
          <ul className="flex space-x-6">
            <li>HOME</li>
            <li>SOBRE</li>
            <li>SERVIÇOS</li>
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
            <li>CONTATOS</li>
            <li>PROMOÇÕES</li>
            <li>NOSSO MÉTODO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
