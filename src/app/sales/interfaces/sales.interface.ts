export enum Color {
  red = 'rojo',
  black = 'negro',
  green = 'verde',
  blue = 'azul',
}

export interface Hero {
  name: string;
  flies: boolean;
  color: Color;
}
