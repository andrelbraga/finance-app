import React from 'react';
import { CircleDollarSign, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Perguntas Frequentes', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <CircleDollarSign className="h-8 w-8 text-[#1B6E7C]" />
            <span className="ml-2 text-xl font-bold text-[#1B6E7C]">FinanceP2P</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-[#1B6E7C] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-[#1B6E7C] text-white px-6 py-2 rounded-[15px] hover:bg-[#145A66] transition-colors">
              Simular Crédito
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-[#1B6E7C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full bg-[#1B6E7C] text-white px-6 py-2 rounded-[15px] hover:bg-[#145A66] transition-colors">
                Simular Crédito
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;