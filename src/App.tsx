import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Clock, 
  ChevronDown, 
  Menu,
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LoanForm from './components/LoanForm';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <LoanForm />
        <Benefits />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;