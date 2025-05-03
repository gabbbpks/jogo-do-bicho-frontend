
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import Sidebar from "@/components/Sidebar";
import ClientSidebar from "@/components/ClientSidebar";
import { useAuth } from "@/contexts/AuthContext";
import StarryBackground from "@/components/StarryBackground";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col bg-[#0E0D1F] text-white relative">
        <StarryBackground />
        <Header />
        
        <div className="flex flex-1 w-full">
          {isAuthenticated ? <ClientSidebar /> : <Sidebar />}
          
          <main className="flex-1 overflow-y-auto px-4 md:px-8 py-4">
            <Outlet />
          </main>
        </div>
        
        <BottomNavigation />
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
