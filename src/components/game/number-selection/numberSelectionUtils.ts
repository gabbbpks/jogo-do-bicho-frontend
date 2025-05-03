
export const getBetTypeText = (format: string, maxSelections: number, selectedBetType: string | null): string => {
  switch(format) {
    case "sequence":
      return `Selecione ${maxSelections} números em sequência. ${sequentialFormatHelpText(selectedBetType)}`;
    case "multiple":
      return `Selecione até ${maxSelections} números diferentes`;
    case "multiple-group":
      return `Selecione até ${maxSelections} grupos diferentes`;
    case "group":
      return "Selecione um grupo de bichos";
    default:
      return "Selecione um número";
  }
};

export const sequentialFormatHelpText = (selectedBetType: string | null): string => {
  switch(selectedBetType) {
    case "milhar": return "Selecione os 4 números em ordem para formar a milhar";
    case "centena": return "Selecione os 3 números em ordem para formar a centena";
    case "dezena": return "Selecione os 2 números em ordem para formar a dezena";
    default: return "";
  }
};

export const getNumberButtonClasses = (num: number, selectedNumbers: number[]): string => {
  const isSelected = selectedNumbers.includes(num);
  const baseClasses = "rounded-lg p-4 text-center text-xl font-bold transition-colors text-white";
  
  if (isSelected) {
    return `${baseClasses} bg-[#12111F] border border-[#3B82F6] bg-[#3B82F6]/20 hover:bg-[#2A2D45] hover:border-[#3B82F6]`;
  } else {
    return `${baseClasses} bg-[#0F0F1F] border border-[#2A2D45] hover:bg-[#2A2D45] hover:border-[#3B82F6]`;
  }
};
