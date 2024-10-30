import { renderHook, act } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import useFsStore from '@/stores/use-fs-store';
import { getNextGridIndex } from '@/stores/use-fs-store/fs-helpers';
import useGridStore from '@/stores/use-grid-store';
import { indexToPosition, positionToIndex } from '@/utils/grid';

describe('Index to Position', () => {
  it('should convert index 0 to position [0, 0] with 4 lines', () => {
    expect(indexToPosition(0, 4)).toEqual({ x: 0, y: 0 });
  });

  it('should convert index 7 to position [1, 3] with 4 lines', () => {
    expect(indexToPosition(7, 4)).toEqual({ x: 1, y: 3 });
  });

  it('should convert index 7 to position [100, 300] with 4 lines', () => {
    expect(indexToPosition(7, 4)).toEqual({ x: 1, y: 3 });
  });

  it('should convert index 7 to position [3, 1] with 4 lines when flow is row', () => {
    expect(indexToPosition(7, 4, 'row')).toEqual({ x: 3, y: 1 });
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

  it('should convert position [100, 300] to index 7 with 4 lines', () => {
    expect(positionToIndex(100, 300, 4)).toBe(7);
  });

  it('should convert position [300, 100] to index 7 with 4 lines when flow is row', () => {
    expect(positionToIndex(300, 100, 4, 'row')).toBe(7);
  });

  it('should convert position [200, 0] to index 8 with 4 lines', () => {
    expect(positionToIndex(200, 0, 4)).toBe(8);
  });

  it('should correctly convert position [300, 700], 10 lines, to index 37', () => {
    expect(positionToIndex(300, 700, 10)).toBe(37);
  });
});

describe('Grid Helpers', () => {
  const { result: fsResult } = renderHook(() => useFsStore());
  const { result } = renderHook(() => useGridStore());
  const fs = fsResult.current;
  const grid = result.current;

  it('Should calculate the next grid index correctly', () => {
    act(() => {
      fs.initDir(['/0', '/1', '/2', '/3', '/folder/']);
      const nextIndex = getNextGridIndex('/');
      expect(nextIndex).toBe(5);

      fs.rm('/0');
      expect(getNextGridIndex('/')).toBe(0);

      fs.touch('/0');
      expect(getNextGridIndex('/')).toBe(5);
      expect(getNextGridIndex('/folder')).toBe(0);

      fs.mv('/2', '/folder/0');
      expect(getNextGridIndex('/folder')).toBe(1);
      expect(getNextGridIndex('/')).toBe(2);
      fs.mv('/3', '/folder/1');
      expect(getNextGridIndex('/folder')).toBe(2);
      expect(getNextGridIndex('/')).toBe(2);
      fs.mv('/0', '/folder/2');
      expect(getNextGridIndex('/folder')).toBe(3);
      expect(getNextGridIndex('/')).toBe(0);

      grid.sort('/');
      expect(getNextGridIndex('/')).toBe(2);

      fs.mv('/folder/0', '/2');
      expect(getNextGridIndex('/')).toBe(3);
      expect(getNextGridIndex('/folder')).toBe(0);

      fs.mv('/folder/1', '/3');
      expect(getNextGridIndex('/')).toBe(4);
      expect(getNextGridIndex('/folder')).toBe(0);

      fs.mv('/folder/2', '/4');
      expect(getNextGridIndex('/')).toBe(5);
      expect(getNextGridIndex('/folder')).toBe(0);

      fs.rm('/folder');
      expect(getNextGridIndex('/')).toBe(1);

      fs.rm('/4');
      fs.rm('/3');
      fs.rm('/2');
      expect(getNextGridIndex('/')).toBe(1);
      fs.rm('/1');
      expect(getNextGridIndex('/')).toBe(0);
    });
  });
  it('Should should handle setting duplicate indeces correctly', () => {
    act(() => {
      fs.initDir(['/0', '/1', '/2', '/folder/']);
      grid.setIndex('/0', 1);
      expect(grid.getIndex('/0')).toBe(0);
      grid.setIndex('/0', 2);
      expect(grid.getIndex('/0')).toBe(0);
      grid.setIndex('/0', 3);
      expect(grid.getIndex('/0')).toBe(0);
      grid.setIndex('/0', 4);
      expect(grid.getIndex('/0')).toBe(4);
    });
  });
});
