import { it, expect, describe } from 'vitest';

import { indexToPosition, positionToIndex } from '@/utils/grid';

describe('Index to Position', () => {
  it('should convert index 0 to position [0, 0] with 4 lines', () => {
    expect(indexToPosition(0, 4)).toEqual({ x: 0, y: 0 });
  });

  it('should convert index 7 to position [1, 3] with 4 lines', () => {
    expect(indexToPosition(7, 4)).toEqual({ x: 1, y: 3 });
  });

  it('should convert index 7 to position [3, 1] with 4 lines when flow is row', () => {
    expect(indexToPosition(7, 4, { flow: 'row' })).toEqual({ x: 3, y: 1 });
  });

  it('should convert index 8 to position [2, 0] with 4 lines', () => {
    expect(indexToPosition(8, 4)).toEqual({ x: 2, y: 0 });
  });

  it('should correctly convert index 37, 10 lines, to position [3, 7]', () => {
    expect(indexToPosition(37, 10)).toEqual({ x: 3, y: 7 });
  });
});

describe('Position to Index', () => {
  // Do everything above in reverse
  it('should convert position [0, 0] to index 0 with 4 lines', () => {
    expect(positionToIndex(0, 0, 4)).toBe(0);
  });

  it('should convert position [1, 3] to index 7 with 4 lines', () => {
    expect(positionToIndex(1, 3, 4)).toBe(7);
  });

  it('should convert position [3, 1] to index 7 with 4 lines when flow is row', () => {
    expect(positionToIndex(3, 1, 4, { flow: 'row' })).toBe(7);
  });

  it('should convert position [2, 0] to index 8 with 4 lines', () => {
    expect(positionToIndex(2, 0, 4)).toBe(8);
  });

  it('should correctly convert position [3, 7], 10 lines, to index 37', () => {
    expect(positionToIndex(3, 7, 10)).toBe(37);
  });
});
