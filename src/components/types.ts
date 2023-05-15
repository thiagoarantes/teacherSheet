export interface Line {
  note: string;
  categories: string[];
  hints: string;
}

export interface State {
  name: string;
  score: number;
  totalG: number;
  totalV: number;
  totalP: number;
  totalF: number;
  lines: Line[];
}
