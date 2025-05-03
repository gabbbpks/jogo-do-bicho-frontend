
import { Draw } from "@/types/results";

// Mock data for when the API is not available
export const mockDraws: Draw[] = [
  {
    id: 1,
    date: new Date(),
    time: "11:00",
    results: [
      { numbers: [2578], animal: "Coelho" },
      { numbers: [7843], animal: "Cachorro" },
      { numbers: [5621], animal: "Borboleta" },
      { numbers: [9034], animal: "Águia" },
      { numbers: [1267], animal: "Carneiro" },
    ],
  },
  {
    id: 2,
    date: new Date(),
    time: "14:00",
    results: [
      { numbers: [1234], animal: "Galo" },
      { numbers: [5678], animal: "Vaca" },
      { numbers: [9012], animal: "Elefante" },
      { numbers: [3456], animal: "Tigre" },
      { numbers: [7890], animal: "Burro" },
    ],
  },
  {
    id: 3,
    date: new Date(),
    time: "17:00",
    results: [
      { numbers: [4321], animal: "Leão" },
      { numbers: [8765], animal: "Macaco" },
      { numbers: [2109], animal: "Veado" },
      { numbers: [6543], animal: "Jacaré" },
      { numbers: [987], animal: "Peru" },  // Fixed: Removed leading zero
    ],
  },
];
