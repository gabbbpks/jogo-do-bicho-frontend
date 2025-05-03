
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <h1 className="mb-6 text-6xl font-bold text-bicho-primary">404</h1>
      <p className="mb-8 text-xl text-gray-600">
        Ops! Parece que você se perdeu no meio da selva.
      </p>
      <p className="max-w-md mb-8 text-gray-500">
        A página que você está procurando não foi encontrada. Talvez o bicho tenha comido!
      </p>
      <Button asChild>
        <Link to="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  );
};

export default NotFound;
