
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Layout from "./layout/Layout";
import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";
import ResultsPage from "@/pages/ResultsPage";
import ComoJogar from "@/pages/ComoJogar";
import Combinacoes from "@/pages/Combinacoes";
import Premiacoes from "@/pages/Premiacoes";
import Estatisticas from "@/pages/Estatisticas";
import Deposito from "@/pages/Deposito";
import Saque from "@/pages/Saque";
import JogoInstantaneo from "@/pages/JogoInstantaneo";
import NotFound from "@/pages/NotFound";
import HistoricoApostas from "@/pages/HistoricoApostas";
import BettingAreaPage from "./pages/BettingAreaPage";
import Ajuda from "./pages/Ajuda";
import Extrato from "./pages/Extrato";
import Perfil from "./pages/Perfil";
import Notificacoes from "./pages/Notificacoes";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/resultados" element={<ResultsPage />} />
                <Route path="/como-jogar" element={<ComoJogar />} />
                <Route path="/combinacoes" element={<Combinacoes />} />
                <Route path="/premiacoes" element={<Premiacoes />} />
                <Route path="/estatisticas" element={<Estatisticas />} />
                <Route path="/deposito" element={<Deposito />} />
                <Route path="/saque" element={<Saque />} />
                <Route path="/jogo" element={<JogoInstantaneo />} />
                <Route path="/jogar" element={<BettingAreaPage />} />
                <Route path="/historico" element={<HistoricoApostas />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/extrato" element={<Extrato />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/notificacoes" element={<Notificacoes />} />
                <Route path="/jogo-instantaneo" element={<JogoInstantaneo />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster />
    </>
  )
}

export default App
