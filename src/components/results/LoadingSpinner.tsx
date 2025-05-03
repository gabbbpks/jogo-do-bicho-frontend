
const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6A48F3] mb-4"></div>
      <p className="text-gray-400">Carregando...</p>
    </div>
  );
};

export default LoadingSpinner;
