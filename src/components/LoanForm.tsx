import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, X } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  cpf: string;
  birthDate: string;
  email: string;
  phone: string;
  companyName: string;
  cnpj: string;
  admissionDate: string;
}

const LoanForm = () => {
  const [step, setStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState(5000);
  const [installments, setInstallments] = useState(6);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cpf: '',
    birthDate: '',
    email: '',
    phone: '',
    companyName: '',
    cnpj: '',
    admissionDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setLoanAmount(5000);
    setInstallments(6);
    setFormData({
      firstName: '',
      lastName: '',
      cpf: '',
      birthDate: '',
      email: '',
      phone: '',
      companyName: '',
      cnpj: '',
      admissionDate: ''
    });
    setStep(1);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
          <div className="text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Simulação enviada com sucesso!</h3>
            <p className="text-gray-600 mb-6">
              Em breve entraremos em contato!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#1B6E7C] text-white px-6 py-2 rounded-[15px]"
            >
              Fazer Nova Simulação
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <div className={`h-1 w-1/2 transition-colors duration-300 ${step === 1 ? 'bg-[#1B6E7C]' : 'bg-gray-200'}`} />
              <div className={`h-1 w-1/2 transition-colors duration-300 ${step === 2 ? 'bg-[#1B6E7C]' : 'bg-gray-200'}`} />
            </div>
            <div className="flex justify-between">
              <span className={`text-sm font-medium ${step === 1 ? 'text-[#1B6E7C]' : 'text-gray-400'}`}>
                Valor do Empréstimo
              </span>
              <span className={`text-sm font-medium ${step === 2 ? 'text-[#1B6E7C]' : 'text-gray-400'}`}>
                Seus Dados
              </span>
            </div>
          </div>

          {step === 1 ? (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor do Empréstimo: {formatCurrency(loanAmount)}
                </label>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="100"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>R$ 1.000</span>
                  <span>R$ 15.000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Parcelas
                </label>
                <div className="grid grid-cols-4 gap-4">
                  {[3, 6, 9, 12].map((number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => setInstallments(number)}
                      className={`p-3 rounded-lg border ${
                        installments === number
                          ? 'border-[#1B6E7C] bg-[#1B6E7C] text-white'
                          : 'border-gray-200 hover:border-[#1B6E7C]'
                      }`}
                    >
                      {number}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 border border-[#1B6E7C] text-[#1B6E7C] rounded-[15px]"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-[#1B6E7C] text-white px-6 py-3 rounded-[15px] flex items-center justify-center"
                >
                  Avançar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sobrenome
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CPF
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.cpf}
                    onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone (WhatsApp)
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome da Empresa
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CNPJ
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.cnpj}
                    onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Admissão
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.admissionDate}
                    onChange={(e) => setFormData({...formData, admissionDate: e.target.value})}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 border border-[#1B6E7C] text-[#1B6E7C] rounded-[15px]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#1B6E7C] text-white px-6 py-3 rounded-[15px] flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Enviando...
                    </div>
                  ) : (
                    'Enviar Simulação'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <AlertCircle className="h-6 w-6 text-[#1B6E7C]" />
              <button
                onClick={() => setShowConfirmation(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-2">Confirmar envio</h3>
            <p className="text-gray-600 mb-6">
              Confirmo que todos os dados fornecidos são verdadeiros e estou de acordo com os termos de uso.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-[15px] text-gray-700"
              >
                Revisar Dados
              </button>
              <button
                onClick={handleConfirmSubmit}
                className="flex-1 bg-[#1B6E7C] text-white px-4 py-2 rounded-[15px]"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoanForm;