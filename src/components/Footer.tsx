import React from 'react';
import { CircleDollarSign } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0E4351] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <CircleDollarSign className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">FinanceP2P</span>
            </div>
            <p className="text-white/80">
              Transformando o mercado de crédito através da tecnologia e transparência.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Sobre Nós</h3>
            <ul className="space-y-2 text-white/80">
              <li>Nossa História</li>
              <li>Time</li>
              <li>Carreiras</li>
              <li>Contato</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-white/80">
              <li>Empréstimo Pessoal</li>
              <li>Empréstimo Empresarial</li>
              <li>Refinanciamento</li>
              <li>Investimentos P2P</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-white/80">
              <li>Termos de Uso</li>
              <li>Política de Privacidade</li>
              <li>Segurança</li>
              <li>Regulamentação</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© 2024 FinanceP2P. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;