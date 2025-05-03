
export interface DrawResult {
  numbers: number[];
  animal: string;
}

export interface Draw {
  id: number;
  date: Date;
  time: string;
  results: DrawResult[];
}
