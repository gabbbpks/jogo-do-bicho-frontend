
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Gift, Dices, Zap, Hash, Circle } from "lucide-react";
import QuickBetSection from "@/components/game/QuickBetSection";
import BichoMascot from "@/components/BichoMascot";

const HomePage = () => {
  return (
    <div className="animate-fade-in relative">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-r from-[#3B2D8F] to-[#6A48F3] relative overflow-hidden rounded-2xl mb-8 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="relative z-10 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                <span className="text-yellow-300">🎲 </span>
                Jogo do Bicho Popular
              </h1>
              <p className="text-lg opacity-90 mb-6">
                Escolha seu número da sorte e ganhe prêmios incríveis no melhor jogo do bicho online.
              </p>
              <Button 
                asChild
                className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold px-8 py-7 h-auto text-lg rounded-full shadow-lg shadow-yellow-400/30"
              >
                <Link to="/jogar" className="flex items-center">
                  Apostar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Último Resultado</h2>
                  <div className="flex justify-center space-x-3 mb-4">
                    {[2, 7, 8, 5].map((num, idx) => (
                      <span key={idx} className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] flex items-center justify-center text-2xl font-bold shadow-lg shadow-[#6A48F3]/30">
                        {num}
                      </span>
                    ))}
                  </div>
                  <p className="text-yellow-300 font-bold text-xl mb-1">Bicho: Cobra</p>
                  <p className="text-sm text-gray-300">13:00 - 02/05/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Bet Section */}
      <QuickBetSection />

      {/* Aposte Agora */}
      <section className="mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1B] via-[#161630] to-[#0A0A1B] opacity-50 z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6A48F3]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 py-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-12 h-12 bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] rounded-full flex items-center justify-center mr-3 shadow-lg shadow-[#6A48F3]/30">
              <Dices className="w-6 h-6 text-white" />
            </span>
            Apostas Rápidas
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Unidade */}
            <Card className="bg-[#3B2D8F] border-none hover:shadow-lg hover:shadow-[#3B2D8F]/30 transition-all overflow-hidden rounded-xl">
              <div className="p-5 relative h-full">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Circle className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Aposte na Unidade</h3>
                <p className="text-gray-200 text-sm mb-10">Apostas de 0 a 9</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="absolute bottom-5 left-5 right-5 bg-white/10 hover:bg-white/20 text-white border-none rounded-xl"
                >
                  <Link to="/jogar?tipo=unidade" className="flex items-center justify-center">
                    Apostar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Dezena */}
            <Card className="bg-[#10574A] border-none hover:shadow-lg hover:shadow-[#10574A]/30 transition-all overflow-hidden rounded-xl">
              <div className="p-5 relative h-full">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="relative">
                    <Circle className="w-6 h-6 text-white/80" />
                    <Circle className="w-6 h-6 text-white/80 absolute top-0.5 left-0.5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Aposte na Dezena</h3>
                <p className="text-gray-200 text-sm mb-10">Apostas de 00 a 99</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="absolute bottom-5 left-5 right-5 bg-white/10 hover:bg-white/20 text-white border-none rounded-xl"
                >
                  <Link to="/jogar?tipo=dezena" className="flex items-center justify-center">
                    Apostar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Centena */}
            <Card className="bg-[#0F1D36] border-none hover:shadow-lg hover:shadow-[#0F1D36]/30 transition-all overflow-hidden rounded-xl">
              <div className="p-5 relative h-full">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Hash className="w-6 h-6 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Aposte na Centena</h3>
                <p className="text-gray-200 text-sm mb-10">Apostas de 000 a 999</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="absolute bottom-5 left-5 right-5 bg-white/10 hover:bg-white/20 text-white border-none rounded-xl"
                >
                  <Link to="/jogar?tipo=centena" className="flex items-center justify-center">
                    Apostar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Milhar */}
            <Card className="bg-[#3B2D8F] border-none hover:shadow-lg hover:shadow-[#3B2D8F]/30 transition-all overflow-hidden rounded-xl">
              <div className="p-5 relative h-full">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Hash className="w-7 h-7 text-white/80" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Aposte na Milhar</h3>
                <p className="text-gray-200 text-sm mb-10">Apostas de 0000 a 9999</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="absolute bottom-5 left-5 right-5 bg-white/10 hover:bg-white/20 text-white border-none rounded-xl"
                >
                  <Link to="/jogar?tipo=milhar" className="flex items-center justify-center">
                    Apostar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Jogo do Bicho */}
            <Card className="bg-[#4F4A2F] border-none hover:shadow-lg hover:shadow-[#4F4A2F]/30 transition-all overflow-hidden rounded-xl">
              <div className="p-5 relative h-full">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">🦁</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">Jogo do Bicho</h3>
                <p className="text-gray-200 text-sm mb-10">Escolha um dos 25 bichos</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="absolute bottom-5 left-5 right-5 bg-white/10 hover:bg-white/20 text-white border-none rounded-xl"
                >
                  <Link to="/jogo" className="flex items-center justify-center">
                    Apostar <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Jogo Instantâneo Section */}
      <section className="py-8 mb-8 bg-[#0E0D1F] -mx-4 md:-mx-6 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-1/4 w-40 h-40 rounded-full bg-[#10B981] blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-[#6A48F3] blur-3xl"></div>
        </div>
        
        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-2xl p-6 shadow-lg relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <span className="w-10 h-10 bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] rounded-full flex items-center justify-center mr-3 shadow-lg shadow-[#6A48F3]/30">
                <Zap className="w-5 h-5" />
              </span>
              Jogo Instantâneo
            </h2>
            <Button 
              asChild
              variant="purple"
              className="px-4 py-2 h-9 text-sm font-medium"
            >
              <Link to="/jogo-instantaneo" className="flex items-center">
                Apostar agora <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Bicho', icon: 'lion', color: '#10B981' },
              { name: 'Loteria', icon: 'tiger', color: '#6A48F3' },
              { name: 'Raspadinha', icon: 'elephant', color: '#3B82F6' },
              { name: 'Bets', icon: 'eagle', color: '#EC4899' }
            ].map((game, i) => (
              <Card key={i} className="bg-[#12111F] border-[#2A2D45] hover:border-[#6A48F3] overflow-hidden transition-all rounded-2xl shadow-lg hover:shadow-xl">
                <Link to="/jogo-instantaneo">
                  <div className="p-4 text-center">
                    <div className="mx-auto mb-3 flex items-center justify-center">
                      <BichoMascot type={game.icon as 'tiger' | 'lion' | 'elephant' | 'eagle'} />
                    </div>
                    <h3 className="font-medium text-lg text-white">{game.name}</h3>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Últimos Resultados */}
      <section className="mb-8">
        <div className="bg-[#1E1D2E] border border-[#2A2D45] rounded-2xl p-6 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#10B981]/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#6A48F3]/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] rounded-full flex items-center justify-center mr-3 shadow-lg shadow-[#6A48F3]/30">📊</span>
                Resultados Recentes
              </h2>
              <Link to="/resultados" className="text-[#6A48F3] text-sm hover:underline">
                Ver todos
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { time: '13:00', date: '02/05/2025', numbers: '2785', animal: 'Cobra' },
                { time: '10:00', date: '02/05/2025', numbers: '4291', animal: 'Tigre' },
                { time: '07:00', date: '02/05/2025', numbers: '6423', animal: 'Elefante' },
              ].map((result, i) => (
                <Card key={i} className="bg-[#12111F] border-[#2A2D45] hover:border-[#6A48F3] transition-colors overflow-hidden rounded-2xl shadow-lg hover:shadow-xl">
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200">{result.time}</span>
                      <span className="text-gray-200">{result.date}</span>
                    </div>
                    <div className="flex justify-center space-x-2 mb-3">
                      {result.numbers.split('').map((num, j) => (
                        <span key={j} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6A48F3] to-[#4F36B0] flex items-center justify-center text-lg font-bold shadow-md">
                          {num}
                        </span>
                      ))}
                    </div>
                    <p className="text-center text-yellow-300 font-medium">Bicho: {result.animal}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
