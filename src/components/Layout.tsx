
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import StarryBackground from "./StarryBackground";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen bg-[#0A0A1B]">
        <StarryBackground />
        <Header />
        <div className="flex flex-1 relative z-10">
          <Sidebar />
          <main className="flex-1 text-white px-4 md:px-6 py-6 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
        <Footer />
        <BottomNavigation />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
