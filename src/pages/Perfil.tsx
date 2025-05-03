
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Check, Edit } from 'lucide-react';
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Perfil: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // User data form state
  const [formData, setFormData] = useState({
    telefone: user?.telefone || '',
    email: user?.email || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Here you would update the user data
      toast({
        title: "Dados salvos",
        description: "Suas informações foram atualizadas com sucesso.",
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar suas informações.",
        variant: "destructive",
      });
    }
  };

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
          <User className="mr-2" />
          Dados Pessoais
        </h1>
        <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Check className="w-4 h-4 mr-2" /> Salvar
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" /> Editar
            </>
          )}
        </Button>
      </div>

      <div className="bg-[#0E0D1B] border border-[#2A2D45] rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">ID</label>
            <div className="bg-[#12131E] p-3 rounded flex items-center">
              <span className="text-blue-500">{user?.id || '2857732'}</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">CPF</label>
            <div className="bg-[#12131E] p-3 rounded">
              {user?.cpf || '121.808.794-31'}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <div className="bg-[#12131E] p-3 rounded">
              {user?.nome || 'ANDERSON'}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Sobrenome</label>
            <div className="bg-[#12131E] p-3 rounded">
              {user?.sobrenome || 'GALVAO'}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
            <div className="bg-[#12131E] p-3 rounded">
              {user?.dataNascimento || '27/04/1999'}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            {isEditing ? (
              <Input 
                name="telefone" 
                value={formData.telefone} 
                onChange={handleChange} 
                placeholder="+55 (84) 99976-6091" 
                className="bg-[#12131E] border-[#2A2D45]"
              />
            ) : (
              <div className="bg-[#12131E] p-3 rounded flex justify-between items-center">
                <span>{formData.telefone || '+55 (84) 99976-6091'}</span>
                <Button variant="outline" size="sm" className="h-8 px-3">
                  Validar
                </Button>
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            {isEditing ? (
              <Input 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="andersongbpires@hotmail.com" 
                className="bg-[#12131E] border-[#2A2D45]"
              />
            ) : (
              <div className="bg-[#12131E] p-3 rounded flex justify-between items-center">
                <span>{formData.email || 'andersongbpires@hotmail.com'}</span>
                <Button variant="outline" size="sm" className="h-8 px-3">
                  Validar
                </Button>
              </div>
            )}
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="email-marketing" 
              className="h-4 w-4 rounded border-gray-300 text-blue-600" 
              defaultChecked 
            />
            <label htmlFor="email-marketing" className="ml-2 text-sm">
              Aceito receber novidades e ofertas por E-MAIL
            </label>
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="sms-marketing" 
              className="h-4 w-4 rounded border-gray-300 text-blue-600" 
              defaultChecked 
            />
            <label htmlFor="sms-marketing" className="ml-2 text-sm">
              Aceito receber novidades e ofertas por SMS
            </label>
          </div>
        </div>
        
        {isEditing && (
          <div className="mt-6">
            <Button onClick={handleSave} className="w-full">
              Salvar Dados Pessoais
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Perfil;
