import { Position } from '@/types';

export function indexToPosition(index: number, itemsPerLine: number, flow = 'col'): Position {
  if (itemsPerLine <= 0) {
    return { x: 0, y: 0 };
  }
  const x = flow === 'row' ? index % itemsPerLine : Math.floor(index / itemsPerLine);
  const y = flow === 'row' ? Math.floor(index / itemsPerLine) : index % itemsPerLine;
  return { x, y };
}

export function positionToIndex(x: number, y: number, itemsPerLine: number, flow = 'col'): number {
  if (itemsPerLine <= 0) {
    return 0;
  }
  const adjustedX = Math.floor(x / 100);
  const adjustedY = Math.floor(y / 100);
  return flow === 'row'
    ? adjustedY * itemsPerLine + adjustedX
    : adjustedX * itemsPerLine + adjustedY;
}
