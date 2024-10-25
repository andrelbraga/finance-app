import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é empréstimo P2P?',
      answer: 'Empréstimo P2P (peer-to-peer) é um modelo de empréstimo direto entre pessoas, sem intermediação bancária tradicional, resultando em taxas mais competitivas.'
    },
    {
      question: 'Quais são os requisitos para solicitar?',
      answer: 'É necessário ser maior de 18 anos, trabalhar em regime CLT, ter renda comprovada e score acima de 600.'
    },
    {
      question: 'Qual o prazo de aprovação?',
      answer: 'A aprovação inicial ocorre em até 24 horas úteis após o envio de toda a documentação necessária.'
    },
    {
      question: 'Como funciona o pagamento das parcelas?',
      answer: 'As parcelas são pagas através de boleto bancário ou débito automático, com vencimento escolhido pelo cliente.'
    },
    {
      question: 'Posso quitar antecipadamente?',
      answer: 'Sim, oferecemos a possibilidade de quitação antecipada com desconto proporcional nos juros.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#1B6E7C]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#1B6E7C]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;