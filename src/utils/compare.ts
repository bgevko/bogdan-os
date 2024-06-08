import { type Window, Size } from '@/types/units';

function isDimensions(item: Window | Size): item is Window {
  return 'size' in item && 'position' in item;
}

export function WindowsEqualOrLess(a: Window | Size, b: Window | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth <= bWidth || aHeight <= bHeight;
}

export function WindowsEqualOrGreater(a: Window | Size, b: Window | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth >= bWidth || aHeight >= bHeight;
}

export function WindowMin(a: Window, b: Window): Window {
  // will return a if a width or height is smaller than b, otherwise will return b
  return WindowsEqualOrLess(a, b) ? a : b;
}

export function WindowMax(a: Window, b: Window): Window {
  // will return a if a width or height is larger than b, otherwise will return b
  return WindowsEqualOrGreater(a, b) ? a : b;
}
