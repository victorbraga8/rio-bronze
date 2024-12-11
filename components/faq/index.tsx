"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Faq({ id }: { id: string }) {
  const faqs = [
    {
      question: "Posso usar meu biquíni para fazer o bronze?",
      answer:
        "Sim, você pode usar seu biquíni preferido para fazer o bronze, desde que ele seja confortável.",
    },
    {
      question: "Em quantas sessões fico com a marquinha perfeita?",
      answer:
        "A marquinha perfeita pode aparecer após 3 a 5 sessões, dependendo da sua pele.",
    },
    {
      question: "Qual intervalo ideal entre as sessões?",
      answer:
        "O intervalo ideal é de 48 horas, para garantir a saúde da sua pele.",
    },
    {
      question: "É necessário usar protetor solar durante o bronze?",
      answer:
        "Sim, o protetor solar é essencial para proteger a pele mesmo durante o bronze.",
    },
    {
      question: "O bronze é seguro para todos os tipos de pele?",
      answer:
        "Sim, mas é importante consultar um profissional para garantir os melhores resultados.",
    },
    {
      question: "Preciso agendar as sessões com antecedência?",
      answer:
        "Recomendamos que agende suas sessões para garantir disponibilidade no horário desejado.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10" id={id}>
      <h2 className="text-2xl font-bold text-center text-brown-700 mb-6">
        Dúvidas Frequentes:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="border border-gray-300 rounded-lg"
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="flex justify-between items-center px-4 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
