
// Get bet type options based on selected type
export const getBetTypeOptions = (selectedBetType: string | null) => {
  if (selectedBetType) {
    // Se já temos um tipo selecionado do componente BetTypeSelection
    return [
      { value: selectedBetType, label: getBetTypeLabel(selectedBetType) }
    ];
  }
  
  // Opções padrão
  return [
    { value: "normal", label: "Normal" },
    { value: "milhar", label: "Milhar" },
    { value: "centena", label: "Centena" },
    { value: "dezena", label: "Dezena" },
    { value: "unidade", label: "Unidade" },
    { value: "terno-dezena", label: "Terno Dezena" },
    { value: "terno-grupo", label: "Terno Grupo" },
    { value: "duque-dezena", label: "Duque Dezena" },
    { value: "duque-grupo", label: "Duque Grupo" },
    { value: "dezena-fortuna", label: "Dezena da Fortuna" },
    { value: "fazendinha", label: "Fazendinha" }
  ];
};

// Get odds based on bet type for display
export const getBetOdds = (selectedBetType: string | null) => {
  if (!selectedBetType) return null;
  
  const betTypeOdds: Record<string, string> = {
    'milhar': '5.000x',
    'centena': '600x',
    'dezena': '60x',
    'unidade': '6x',
    'terno-dezena': '8.000x',
    'terno-grupo': '100x',
    'duque-dezena': '300x',
    'duque-grupo': '15x',
    'dezena-fortuna': '40.000x',
    'fazendinha': '16x',
    'normal': '18x'
  };
  
  return betTypeOdds[selectedBetType] || '';
};

// Get numerical odds value for calculations
export const getBetOddsValue = (selectedBetType: string | null): number => {
  if (!selectedBetType) return 0;
  
  const betTypeOddsValues: Record<string, number> = {
    'milhar': 5000,
    'centena': 600,
    'dezena': 60,
    'unidade': 6,
    'terno-dezena': 8000,
    'terno-grupo': 100,
    'duque-dezena': 300,
    'duque-grupo': 15,
    'dezena-fortuna': 40000,
    'fazendinha': 16,
    'normal': 18
  };
  
  return betTypeOddsValues[selectedBetType] || 0;
};

// Get available draw times
export const getDrawTimes = () => {
  return [
    { id: "10h", label: "10h Bahia" },
    { id: "12h", label: "12h Rio" },
    { id: "14h", label: "14h São Paulo" },
    { id: "16h", label: "16h Federal" },
    { id: "18h", label: "18h Rio" },
    { id: "20h", label: "20h Coruja" }
  ];
};

// Get available prizes
export const getPrizes = () => {
  return ["1", "2", "3", "4", "5"];
};

// Get formatted description for selected bet
export const getBetDescription = (type: string, selectedNumbers: number[]) => {
  if (selectedNumbers.length === 0) return "";
  
  const numbersStr = selectedNumbers.map(n => n.toString()).join('');
  
  switch (type) {
    case "milhar":
      return `Milhar ${numbersStr}`;
    case "centena":
      return `Centena ${numbersStr}`;
    case "dezena":
      return `Dezena ${numbersStr}`;
    case "unidade":
      return `Final ${numbersStr}`;
    case "duque-dezena":
      return `Duque Dezena ${selectedNumbers.join(' com ')}`;
    case "duque-grupo":
      return `Duque Grupo ${selectedNumbers.join(' com ')}`;
    case "terno-dezena":
      return `Terno Dezena ${selectedNumbers.join(', ')}`;
    case "terno-grupo":
      return `Terno Grupo ${selectedNumbers.join(', ')}`;
    default:
      return `${getBetTypeLabel(type)} ${numbersStr}`;
  }
};

// Get label for a bet type
export const getBetTypeLabel = (type: string | null): string => {
  if (!type) return "";
  
  const labels: Record<string, string> = {
    'milhar': 'Milhar',
    'centena': 'Centena',
    'dezena': 'Dezena',
    'unidade': 'Unidade',
    'terno-dezena': 'Terno Dezena',
    'terno-grupo': 'Terno Grupo',
    'duque-dezena': 'Duque Dezena',
    'duque-grupo': 'Duque Grupo',
    'dezena-fortuna': 'Dezena da Fortuna',
    'fazendinha': 'Fazendinha',
    'normal': 'Normal'
  };
  
  return labels[type] || type.charAt(0).toUpperCase() + type.slice(1);
};

// Get bet requirements info
export const getBetRequirements = (betType: string | null) => {
  if (!betType) return { numbersRequired: 1, format: "single" };
  
  const requirements: Record<string, {numbersRequired: number, format: string}> = {
    'milhar': { numbersRequired: 4, format: "sequence" },
    'centena': { numbersRequired: 3, format: "sequence" },
    'dezena': { numbersRequired: 2, format: "sequence" },
    'unidade': { numbersRequired: 1, format: "single" },
    'terno-dezena': { numbersRequired: 3, format: "multiple" },
    'terno-grupo': { numbersRequired: 3, format: "multiple-group" },
    'duque-dezena': { numbersRequired: 2, format: "multiple" },
    'duque-grupo': { numbersRequired: 2, format: "multiple-group" },
    'dezena-fortuna': { numbersRequired: 1, format: "single" },
    'fazendinha': { numbersRequired: 1, format: "group" },
    'normal': { numbersRequired: 1, format: "single" }
  };
  
  return requirements[betType] || { numbersRequired: 1, format: "single" };
};
