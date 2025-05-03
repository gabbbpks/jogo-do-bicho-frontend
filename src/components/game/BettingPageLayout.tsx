
import { ReactNode } from "react";

interface BettingPageLayoutProps {
  title: string;
  mainContent: ReactNode;
  sidebarContent: ReactNode;
  children?: ReactNode; // Added children as an optional prop
}

const BettingPageLayout = ({ 
  title, 
  mainContent, 
  sidebarContent, 
  children 
}: BettingPageLayoutProps) => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">{title}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="col-span-1 lg:col-span-4">
          {mainContent}
        </div>
        
        <div className="col-span-1 lg:col-span-2">
          {sidebarContent}
        </div>
      </div>
      
      {children} {/* Render children at the bottom */}
    </div>
  );
};

export default BettingPageLayout;
