import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Services() {
  return (
    <>
      <div className="bg-[#FAF3F0] py-10">
        <h2 className="text-center text-2xl font-bold mb-4 text-[#A3765F]">
          CONHEÇA OS BENEFÍCIOS DO #BRONZEDAGG
        </h2>
        <p className="text-center text-base mb-8 text-[#A3765F]">
          O #BronzedaGG é um bronzeamento saudável, sem exposição solar e que
          além de bronzear, também hidrata, nutre a pele e é recomendado por
          dermatologistas.
        </p>

        <div className="flex justify-center gap-8">
          <Card className="max-w-sm bg-gray-900 text-white">
            <CardHeader>
              <div className="bg-orange-500 py-2 px-4 text-white font-bold text-lg">
                MELHOR PREÇO
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-orange-400 text-xl font-bold">
                PACOTE 30 MINUTOS - 3 SESSÕES
              </h4>
              <ul className="space-y-2">
                <li>3 sessões de 30 minutos;</li>
                <li>Incluso biquíni e acelerador de marquinha;</li>
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
              <div className="bg-yellow-500 py-2 px-4 text-white font-bold text-lg">
                MELHOR CUSTO
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-orange-400 text-xl font-bold">
                PACOTE 40 MINUTOS - 3 SESSÕES
              </h4>
              <ul className="space-y-2">
                <li>3 sessões de 40 minutos;</li>
                <li>Incluso biquíni e acelerador de marquinha;</li>
              </ul>
              <h5 className="mt-4 text-lg">De R$ 285,00 por:</h5>
              <h6 className="text-green-400 text-lg font-semibold">
                R$ 275,00 à vista ou R$ 275,00 em 3x no cartão
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
              <div className="bg-orange-500 py-2 px-4 text-white font-bold text-lg">
                MELHOR PREÇO
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-orange-400 text-xl font-bold">
                PACOTE 50 MINUTOS - 3 SESSÕES
              </h4>
              <ul className="space-y-2">
                <li>3 sessões de 50 minutos;</li>
                <li>Incluso biquíni e acelerador de marquinha;</li>
              </ul>
              <h5 className="mt-4 text-lg">De R$ 315,00 por:</h5>
              <h6 className="text-green-400 text-lg font-semibold">
                R$ 300,00 à vista ou R$ 300,00 em 3x no cartão
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
              <div className="bg-orange-500 py-2 px-4 text-white font-bold text-lg">
                MELHOR PREÇO
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="text-orange-400 text-xl font-bold">
                PACOTE 60 MINUTOS - 3 SESSÕES
              </h4>
              <ul className="space-y-2">
                <li>3 sessões de 60 minutos;</li>
                <li>Incluso biquíni e acelerador de marquinha;</li>
              </ul>
              <h5 className="mt-4 text-lg">De R$ 345,00 por:</h5>
              <h6 className="text-green-400 text-lg font-semibold">
                R$ 330,00 à vista ou R$ 330,00 em 3x no cartão
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
    </>
  );
}
