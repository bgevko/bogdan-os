import { type Dimensions, Size } from '@/types/units';

function isDimensions(item: Dimensions | Size): item is Dimensions {
  return 'size' in item && 'position' in item;
}

export function aNarrowerOrShorterThanB(a: Dimensions | Size, b: Dimensions | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth <= bWidth || aHeight <= bHeight;
}

export function aWiderOrTallerThanB(a: Dimensions | Size, b: Dimensions | Size): boolean {
  const { width: aWidth, height: aHeight } = isDimensions(a) ? a.size : a;
  const { width: bWidth, height: bHeight } = isDimensions(b) ? b.size : b;
  return aWidth >= bWidth || aHeight >= bHeight;
}
