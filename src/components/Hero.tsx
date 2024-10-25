import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-white to-[#E8F4F6]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Faça sua cotação em alguns cliques!
            </h1>
            <p className="text-lg text-gray-600">
              Empréstimo P2P com as melhores taxas do mercado. 
              Processo 100% digital e aprovação rápida.
            </p>
            <button className="group flex items-center bg-[#1B6E7C] text-white px-8 py-3 rounded-[15px] hover:bg-[#145A66] transition-colors">
              Simular Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative aspect-video">
            <video
              className="w-full h-full rounded-lg shadow-xl object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://static.videezy.com/system/resources/previews/000/021/352/original/financial-data-and-diagrams-showing-stock-market-trends.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;