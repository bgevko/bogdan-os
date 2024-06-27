import { it, expect, describe } from 'vitest';

import { type Window, Size } from '@/types';
import { WindowsEqualOrLess, WindowsEqualOrGreater } from '@/utils/compare';

describe('WindowsEqualOrLess', () => {
  it('should return true if a is narrower than b', () => {
    const a: Window = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    const b: Window = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrLess(a, b)).toBe(true);
  });
  it('should return true if a is the same as be', () => {
    const a: Window = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    const b: Window = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrLess(a, b)).toBe(true);
  });
  it('should should be able to compare dimensions with sizes', () => {
    const a: Window = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    const b: Size = { width: 200, height: 200 };
    expect(WindowsEqualOrLess(a, b)).toBe(true);

    const c: Size = { width: 100, height: 100 };
    const d: Window = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrLess(c, d)).toBe(true);
  });
});

describe('WindowsEqualOrGreater', () => {
  it('should return true if a is wider than b', () => {
    const a: Window = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    const b: Window = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrGreater(a, b)).toBe(true);
  });
  it('should return true if a is the same as be', () => {
    const a: Window = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    const b: Window = { size: { width: 1068, height: 842 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrGreater(a, b)).toBe(true);
  });
  it('should should be able to compare dimensions with sizes', () => {
    const a: Window = { size: { width: 200, height: 200 }, position: { x: 0, y: 0 } };
    const b: Size = { width: 100, height: 100 };
    expect(WindowsEqualOrGreater(a, b)).toBe(true);
    const c: Size = { width: 200, height: 200 };
    const d: Window = { size: { width: 100, height: 100 }, position: { x: 0, y: 0 } };
    expect(WindowsEqualOrGreater(c, d)).toBe(true);
  });
});
