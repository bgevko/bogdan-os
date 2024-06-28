import { type SizePos, Size } from '@/types';

function isDimensions(item: SizePos | Size): item is SizePos {
  return 'size' in item && 'position' in item;
}

export function WindowsEqualOrLess(a: SizePos | Size, b: SizePos | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth <= bWidth || aHeight <= bHeight;
}

export function WindowsEqualOrGreater(a: SizePos | Size, b: SizePos | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth >= bWidth || aHeight >= bHeight;
}

export function WindowsLess(a: SizePos | Size, b: SizePos | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth < bWidth || aHeight < bHeight;
}

export function WindowsGreater(a: SizePos | Size, b: SizePos | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth > bWidth || aHeight > bHeight;
}

export function WindowMin(a: SizePos | Size, b: SizePos | Size): SizePos | Size {
  return WindowsEqualOrLess(a, b) ? a : b;
}

export function WindowMax(a: SizePos, b: SizePos): SizePos {
  return WindowsGreater(a, b) ? a : b;
}
