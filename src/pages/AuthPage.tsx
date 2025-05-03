
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AuthCard from "@/components/auth/AuthCard";

const AuthPage = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  // Extract redirect target from URL if present
  const params = new URLSearchParams(location.search);
  const redirect = params.get('redirect');
  
  // If already authenticated, redirect either to the specified redirect or home
  if (isAuthenticated && !isLoading) {
    if (redirect) {
      // Handle specific redirects
      switch (redirect) {
        case 'betting':
          return <Navigate to="/jogar" />;
        case 'deposito':
          return <Navigate to="/deposito" />;
        case 'saque':
          return <Navigate to="/saque" />;
        default:
          return <Navigate to="/" />;
      }
    }
    // Default redirect to home page
    return <Navigate to="/" />;
  }

  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <AuthCard />
    </div>
  );
};

export default AuthPage;
