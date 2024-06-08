import { it, expect, describe } from 'vitest';

import { type Dimensions, Size } from '@/types/units';
import { aNarrowerOrShorterThanB, aWiderOrTallerThanB } from '@/utils/compare';

describe('aNarrowerOrShorterThanB', () => {
  it('should return true if a is narrower than b', () => {
    const a: Dimensions = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    const b: Dimensions = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    expect(aNarrowerOrShorterThanB(a, b)).toBe(true);
  });
  it('should return true if a is the same as be', () => {
    const a: Dimensions = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    const b: Dimensions = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    expect(aNarrowerOrShorterThanB(a, b)).toBe(true);
  });
  it('should should be able to compare dimensions with sizes', () => {
    const a: Dimensions = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    const b: Size = { width: 200, height: 200 };
    expect(aNarrowerOrShorterThanB(a, b)).toBe(true);

    const c: Size = { width: 100, height: 100 };
    const d: Dimensions = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    expect(aNarrowerOrShorterThanB(c, d)).toBe(true);
  });
});

describe('aWiderOrTallerThanB', () => {
  it('should return true if a is wider than b', () => {
    const a: Dimensions = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    const b: Dimensions = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    expect(aWiderOrTallerThanB(a, b)).toBe(true);
  });
  it('should return true if a is the same as be', () => {
    const a: Dimensions = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    const b: Dimensions = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    expect(aWiderOrTallerThanB(a, b)).toBe(true);
  });
  it('should should be able to compare dimensions with sizes', () => {
    const a: Dimensions = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    const b: Size = { width: 100, height: 100 };
    expect(aWiderOrTallerThanB(a, b)).toBe(true);
    const c: Size = { width: 200, height: 200 };
    const d: Dimensions = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    expect(aWiderOrTallerThanB(c, d)).toBe(true);
  });
});
