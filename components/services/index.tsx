import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Services() {
  return (
    <div className="bg-white py-10">
      <h2 className="text-center font-semibold text-2xl mb-4 text-slate-700">
        CONHEÇA OS BENEFÍCIOS DO{" "}
        <span className="text-amber-600 font-black">GAROTA DO RIO BRONZE</span>
      </h2>
      <p className="text-center text-xl mb-8 text-gray-600">
        É um bronzeamento saudável, sem exposição solar e que além de bronzear,
        também hidrata, nutre a pele e é recomendado por dermatologistas.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card className="max-w-sm bg-gray-900 text-white">
          <CardHeader>
            <div className="bg-yellow-500 py-2 px-4 text-white font-bold text-lg uppercase text-center">
              Pacote 1
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="text-orange-400 text-xl font-bold">
              60 MINUTOS DE SESSÃO
            </h4>
            <ul className="space-y-2 h-[150px]">
              <li>Montagem de Biquini</li>
              <li>Esfoliação</li>
              <li>Hidratação</li>
            </ul>
            <h5 className="mt-4 text-lg">De R$ 255,00 por:</h5>
            <h6 className="text-green-400 text-lg font-semibold">
              R$ 245,00 à vista ou R$ 245,00 em 3x no cartão
            </h6>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Agendar Agora
            </Button>
          </CardFooter>
        </Card>

        <Card className="max-w-sm bg-gray-900 text-white">
          <CardHeader>
            <div className="bg-orange-500 py-2 px-4 text-white font-bold text-lg text-center">
              PACOTE 2
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="text-orange-400 text-xl font-bold">
              90 MINUTOS DE SESSÃO
            </h4>
            <ul className="space-y-2 h-[150px]">
              <li>Montagem de Biquini</li>
              <li>Esfoliação</li>
              <li>Hidratação</li>
            </ul>
            <h5 className="mt-4 text-lg">De R$ 255,00 por:</h5>
            <h6 className="text-green-400 text-lg font-semibold">
              R$ 245,00 à vista ou R$ 245,00 em 3x no cartão
            </h6>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Agendar Agora
            </Button>
          </CardFooter>
        </Card>

        <Card className="max-w-sm bg-gray-900 text-white">
          <CardHeader>
            <div className="bg-amber-800 py-2 px-4 text-white font-bold text-lg text-center">
              PACOTE 3
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="text-orange-400 text-xl font-bold">
              120 MINUTOS DE SESSÃO
            </h4>
            <ul className="space-y-2 h-[150px]">
              <li>Montagem de Biquini</li>
              <li>Esfoliação</li>
              <li>Hidratação</li>
              <li>Banho de Lua</li>
            </ul>
            <h5 className="mt-4 text-lg">De R$ 255,00 por:</h5>
            <h6 className="text-green-400 text-lg font-semibold">
              R$ 245,00 à vista ou R$ 245,00 em 3x no cartão
            </h6>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="w-full">
              Agendar Agora
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
