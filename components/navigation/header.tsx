import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-orange-600 text-white px-40 py-4 w-full">
      <div className="flex justify-start">
        <ul className="flex space-x-6">
          <li>HOME</li>
          <li>SOBRE</li>
          <li>SERVIÇOS</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          alt="garota rio bronze"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-end">
        <ul className="flex space-x-6">
          <li>CONTATOS</li>
          <li>PROMOÇÕES</li>
          <li>NOSSO MÉTODO</li>
        </ul>
      </div>
    </div>
  );
};
