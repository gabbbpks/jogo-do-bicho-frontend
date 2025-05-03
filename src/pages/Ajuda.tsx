
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MessageSquare } from 'lucide-react';

const Ajuda: React.FC = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2">Central de Ajuda</h1>
      <p className="text-gray-400 mb-8">Como podemos ajudar você hoje?</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-xl p-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Suporte por Telefone</h3>
          <p className="text-gray-400 mb-4">Atendimento das 9h às 18h, de segunda a sexta-feira.</p>
          <p className="text-lg font-bold">(11) 9999-9999</p>
        </div>

        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-xl p-6">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
          <p className="text-gray-400 mb-4">Atendimento mais rápido, disponível 24/7.</p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md inline-flex items-center"
          >
            Iniciar Conversa
          </a>
        </div>

        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-400 mb-4">Resposta em até 24 horas.</p>
          <a 
            href="mailto:suporte@jogodobicho.com" 
            className="text-purple-500 hover:underline"
          >
            suporte@jogodobicho.com
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Como funciona o Jogo do Bicho?</h3>
            <p className="text-gray-400">O Jogo do Bicho é uma loteria popular onde você aposta em animais representados por números. Cada animal corresponde a quatro números diferentes, e existem várias modalidades de apostas.</p>
          </div>
          
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Como faço um depósito?</h3>
            <p className="text-gray-400">Para fazer um depósito, acesse a seção "Depósito" no menu superior ou no seu perfil. Escolha o método de pagamento preferido, informe o valor e siga as instruções para concluir a transação.</p>
          </div>
          
          <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Como sacar meus ganhos?</h3>
            <p className="text-gray-400">Para sacar seus ganhos, acesse a seção "Saque" no menu superior ou no seu perfil. Informe seus dados bancários, o valor do saque e aguarde a confirmação.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajuda;
