
interface SimpleTabContentProps {
  title: string;
  description: string;
}

const SimpleTabContent = ({ title, description }: SimpleTabContentProps) => {
  return (
    <div className="bg-[#1c1c28] border border-[#2A2D45] rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

export default SimpleTabContent;
