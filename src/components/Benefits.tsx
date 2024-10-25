import React from 'react';
import { Zap, Shield, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Taxas Competitivas',
      description: 'Juros mais baixos que o mercado tradicional através do modelo P2P'
    },
    {
      icon: Shield,
      title: 'Processo Seguro',
      description: 'Sua informação é protegida com a mais alta tecnologia de segurança'
    },
    {
      icon: Clock,
      title: 'Aprovação Rápida',
      description: 'Receba sua aprovação em até 24 horas úteis'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-[#F8FBFC]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefícios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[30px] shadow-lg transform hover:-translate-y-1 transition-transform"
            >
              <div className="bg-[#1B6E7C]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-[#1B6E7C]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;