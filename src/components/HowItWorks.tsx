import React from 'react';
import { DollarSign, FileText, Send } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: DollarSign,
      title: 'Escolha do Valor',
      description: 'Selecione o valor desejado para sua simulação de empréstimo'
    },
    {
      icon: FileText,
      title: 'Preencha seus Dados',
      description: 'Complete o formulário com suas informações pessoais e profissionais'
    },
    {
      icon: Send,
      title: 'Envio para Cotação',
      description: 'Seus dados serão analisados para uma proposta personalizada'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-[#1B6E7C] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Como Funciona</h2>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-12">
          O empréstimo P2P (peer-to-peer) é uma forma inovadora de conectar pessoas que precisam de crédito diretamente com investidores, eliminando intermediários e reduzindo custos. Isso resulta em taxas mais competitivas para você e um processo totalmente transparente.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-white/20" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;