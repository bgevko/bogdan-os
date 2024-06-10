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

export function WindowsLess(a: Window | Size, b: Window | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth < bWidth || aHeight < bHeight;
}

export function WindowsGreater(a: Window | Size, b: Window | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth > bWidth || aHeight > bHeight;
}

export function WindowMin(a: Window | Size, b: Window | Size): Window | Size {
  return WindowsEqualOrLess(a, b) ? a : b;
}

export function WindowMax(a: Window, b: Window): Window {
  return WindowsGreater(a, b) ? a : b;
}
