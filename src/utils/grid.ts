import { Position } from '@/types';

interface GridOptions {
  flow?: 'row' | 'col';
  multiplier?: number;
  offsetX?: number;
  offsetY?: number;
  offsetIndex?: number;
}

export function indexToPosition(
  index: number,
  itemsPerLine: number,
  options?: GridOptions,
): Position {
  const { flow = 'col' } = options ?? {};
  const multiplier = options?.multiplier ?? 1;
  const offsetX = options?.offsetX ?? 0;
  const offsetY = options?.offsetY ?? 0;
  const offsetIndex = options?.offsetIndex ?? 0;

  const adjustedIndex = index + offsetIndex;

  const x =
    flow === 'row' ? adjustedIndex % itemsPerLine : Math.floor(adjustedIndex / itemsPerLine);
  const y =
    flow === 'row' ? Math.floor(adjustedIndex / itemsPerLine) : adjustedIndex % itemsPerLine;
  return { x: x * multiplier + offsetX, y: y * multiplier + offsetY };
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
