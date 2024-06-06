export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

// export interface Dimensions {
//   x: number;
//   y: number;
//   width: number;
//   height: number;
// }

export interface Dimensions extends Size, Position {}
