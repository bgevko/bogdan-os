import { Position } from '@/types/units';

interface GridOptions {
  flow?: 'row' | 'col';
  multiplier?: number;
}

export function indexToPosition(
  index: number,
  itemsPerLine: number,
  options?: GridOptions,
): Position {
  const { flow = 'col' } = options ?? {};
  const multiplier = options?.multiplier ?? 1;
  const x = flow === 'row' ? index % itemsPerLine : Math.floor(index / itemsPerLine);
  const y = flow === 'row' ? Math.floor(index / itemsPerLine) : index % itemsPerLine;
  return { x: x * multiplier, y: y * multiplier };
}

export function positionToIndex(
  x: number,
  y: number,
  itemsPerLine: number,
  options?: GridOptions,
): number {
  const { flow = 'col' } = options ?? {};
  const multiplier = options?.multiplier ?? 1;
  const adjustedX = Math.floor(x / multiplier);
  const adjustedY = Math.floor(y / multiplier);
  return flow === 'row'
    ? adjustedY * itemsPerLine + adjustedX
    : adjustedX * itemsPerLine + adjustedY;
}
