
// Quick bet generator utility function
export const generateQuickBet = (betAmount: number) => {
  const betTypes = ["milhar", "centena", "dezena", "duque-dezena", "terno-dezena"];
  const drawTimes = ["10h Bahia", "13h Rio", "16h SP", "19h Federal", "21h Coruja"];
  
  // Select a random bet type
  const selectedType = betTypes[Math.floor(Math.random() * betTypes.length)];
  
  // Generate random numbers based on bet type
  let numbers: string[] = [];
  
  switch(selectedType) {
    case "milhar":
      // Generate a 4-digit number
      numbers = [Math.floor(Math.random() * 10000).toString().padStart(4, '0')];
      break;
    case "centena":
      // Generate a 3-digit number
      numbers = [Math.floor(Math.random() * 1000).toString().padStart(3, '0')];
      break;
    case "dezena":
      // Generate a 2-digit number
      numbers = [Math.floor(Math.random() * 100).toString().padStart(2, '0')];
      break;
    case "duque-dezena":
      // Generate 2 different 2-digit numbers
      const num1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      let num2;
      do {
        num2 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      } while(num2 === num1);
      
      numbers = [num1, num2];
      break;
    case "terno-dezena":
      // Generate 3 different 2-digit numbers
      const n1 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      let n2, n3;
      do {
        n2 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      } while(n2 === n1);
      
      do {
        n3 = Math.floor(Math.random() * 100).toString().padStart(2, '0');
      } while(n3 === n1 || n3 === n2);
      
      numbers = [n1, n2, n3];
      break;
  }
  
  // Select a random draw time
  const selectedDrawTime = drawTimes[Math.floor(Math.random() * drawTimes.length)];
  
  return {
    type: selectedType,
    numbers,
    prizes: ["1"],  // Default to first prize
    amount: betAmount.toFixed(2).replace('.', ','),
    drawTime: selectedDrawTime
  };
};
