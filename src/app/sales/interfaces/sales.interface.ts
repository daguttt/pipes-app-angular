export enum Color {
  red,
  black,
  green,
  blue,
}

export interface Hero {
  name: string;
  flies: boolean;
  color: Color;
}
