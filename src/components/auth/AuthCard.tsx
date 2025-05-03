
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import CPFVerificationForm from "./CPFVerificationForm";

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [cpfVerified, setCPFVerified] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Set the active tab based on URL parameters if present
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "register") {
      setActiveTab("register");
    }
  }, [searchParams]);

  const handleCPFVerified = (verifiedUserData: any) => {
    setUserData(verifiedUserData);
    setCPFVerified(true);
    
    // If user exists, go to login tab, otherwise go to register tab
    if (verifiedUserData.userExists) {
      setActiveTab("login");
    } else {
      setActiveTab("register");
      // Pass CPF to the register form through URL params
      navigate(`/auth?tab=register&cpf=${verifiedUserData.cpf}`, { replace: true });
    }
  };

  return (
    <Card className="w-full max-w-md bg-[#1E1D2E] border-[#2A2D45] text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Bicho do Bicho</CardTitle>
        <CardDescription className="text-center text-gray-300">
          {!cpfVerified 
            ? "Informe seu CPF para começar" 
            : "Complete o processo para entrar"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!cpfVerified ? (
          <CPFVerificationForm onCPFVerified={handleCPFVerified} />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#12111F]">
              <TabsTrigger 
                value="login" 
                className="data-[state=active]:bg-[#4361ee] data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger 
                value="register" 
                className="data-[state=active]:bg-[#4361ee] data-[state=active]:text-white"
              >
                Registrar
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <LoginForm initialCPF={userData?.cpf} />
            </TabsContent>
            
            <TabsContent value="register">
              <RegisterForm initialUserData={userData} />
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-400">
          Ao criar uma conta, você concorda com nossos termos e condições.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthCard;
