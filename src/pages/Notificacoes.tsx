
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Notificacoes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  // Example notifications
  const notifications = [
    {
      id: 1,
      title: "Depósito confirmado",
      message: "Seu depósito de R$ 100,00 foi confirmado.",
      date: "05/05/2025",
      read: true
    },
    {
      id: 2,
      title: "Aposta premiada",
      message: "Parabéns! Você ganhou R$ 50,00 na sua última aposta.",
      date: "03/05/2025",
      read: false
    },
    {
      id: 3,
      title: "Promoção especial",
      message: "Aproveite nossa promoção de fim de semana: 10% de bônus em todos os depósitos.",
      date: "01/05/2025",
      read: false
    }
  ];
  
  if (!isAuthenticated) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center py-12">
          <h2 className="text-xl font-bold mb-4">É necessário fazer login</h2>
          <p className="text-gray-400 mb-6">Para acessar esta página, faça login ou crie uma conta.</p>
          <Button asChild>
            <Link to="/auth">Fazer Login</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-6">
        <Link to="/" className="text-blue-500 flex items-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Home
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <Bell className="mr-2" />
          Notificações
        </h1>
        <Button variant="outline" size="sm">
          Marcar todas como lidas
        </Button>
      </div>

      {notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div 
              key={notification.id}
              className={`bg-[#0E0D1B] border ${notification.read ? 'border-[#2A2D45]' : 'border-blue-500'} rounded-lg p-4`}
            >
              <div className="flex justify-between items-start">
                <h3 className={`font-bold ${notification.read ? '' : 'text-blue-400'}`}>{notification.title}</h3>
                <span className="text-xs text-gray-400">{notification.date}</span>
              </div>
              <p className="text-sm mt-2">{notification.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 bg-[#0E0D1B] border border-[#2A2D45] rounded-lg">
          <Bell className="w-12 h-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-bold mb-2">Nenhuma notificação</h2>
          <p className="text-gray-400">Você não tem notificações no momento.</p>
        </div>
      )}
    </div>
  );
};

export default Notificacoes;
