import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import useFsStore from '@/stores/use-fs-store';
import useProcessesStore from '@/stores/use-processes-store';
import { DEFAULT_WINDOW_SIZEPOS, MIN_WINDOW_SIZE } from '@/themes';
import { SizePos, Position, Size } from '@/types';
import { parseFileIcon } from '@/utils/fs';

beforeEach(() => {
  const { result } = renderHook(() => useProcessesStore());
  const { result: fsResult } = renderHook(() => useFsStore());
  const store = result.current;
  const fsStore = fsResult.current;
  act(() => {
    store.reset();
    fsStore.initDir();
    fsStore.initDir(['/test.app', '/file', '/folder/']);
  });
});

describe('useProcessesStore', () => {
  const { result } = renderHook(() => useProcessesStore());
  const store = result.current;
  it('should initialize', () => {
    act(() => {
      expect(store).toBeDefined();
    });
  });
  it('should open and close a process', () => {
    act(() => {
      store.open('/test.app');
      let openedPaths = store.getOpenedPaths();
      expect(openedPaths).toEqual(['/test.app']);

      store.close('/test.app');
      openedPaths = store.getOpenedPaths();
      expect(openedPaths).toEqual([]);

      store.open(['/test.app', '/file', '/folder']);
      openedPaths = store.getOpenedPaths();
      expect(openedPaths).toEqual(['/test.app', '/file', '/folder']);

      store.close(['/test.app', '/file']);
      openedPaths = store.getOpenedPaths();
      expect(openedPaths).toEqual(['/folder']);
    });
  });
  it('should open with a correct icon', () => {
    act(() => {
      store.open(['/test.app', '/file', '/folder']);
      let process = store.getProcess('/test.app');
      let expectedIcon = parseFileIcon('/test.app');
      expect(process.icon).toEqual(expectedIcon);

      process = store.getProcess('/file');
      expectedIcon = parseFileIcon('/file');
      expect(process.icon).toEqual(expectedIcon);

      process = store.getProcess('/folder');
      expectedIcon = parseFileIcon('/folder');
      expect(process.icon).toEqual(expectedIcon);
    });
  });

  it('Should be able to set various window attributes', () => {
    act(() => {
      store.open('/test.app');
      const myWindow = store.getWindow('/test.app');
      expect(myWindow).toEqual(DEFAULT_WINDOW_SIZEPOS);
      const newSizePos: SizePos = {
        size: { width: 100, height: 100 },
        position: { x: 100, y: 100 },
      };
      store.setWindow('/test.app', newSizePos);
      expect(store.getWindow('/test.app')).toEqual(newSizePos);

      const newPos: Position = { x: 200, y: 200 };
      store.setWindowPosition('/test.app', newPos);
      expect(store.getWindow('/test.app').position).toEqual(newPos);
      expect(store.getWindowPosition('/test.app')).toEqual(newPos);

      const newSize: Size = { width: 300, height: 300 };
      store.setWindowSize('/test.app', newSize);
      expect(store.getWindow('/test.app').size).toEqual(newSize);
      expect(store.getWindowSize('/test.app')).toEqual(newSize);

      expect(store.getWindowMinSize('/test.app')).toBe(MIN_WINDOW_SIZE);

      const newDefaultWindow: SizePos = {
        size: { width: 400, height: 400 },
        position: { x: 400, y: 400 },
      };
      store.setDefaultWindow('/test.app', newDefaultWindow);
      expect(store.getDefaultWindow('/test.app')).toEqual(newDefaultWindow);

      expect(store.getIsMaximized('/test.app')).toBe(false);
      store.setIsMaximized('/test.app', true);
      expect(store.getIsMaximized('/test.app')).toBe(true);

      expect(store.getIsMinimized('/test.app')).toBe(false);
      store.setIsMinimized('/test.app', true);
      expect(store.getIsMinimized('/test.app')).toBe(true);

      expect(store.getIsAnimating('/test.app')).toBe(false);
      store.setIsAnimating('/test.app', true);
      expect(store.getIsAnimating('/test.app')).toBe(true);
    });
  });

  it('should cache processes when closed', () => {
    act(() => {
      let cachedPaths = store.getCachedPaths();
      expect(cachedPaths).toEqual([]);

      store.open(['/test.app', '/file', '/folder']);
      cachedPaths = store.getCachedPaths();
      expect(cachedPaths).toEqual([]);

      store.close(['/test.app', '/file']);
      cachedPaths = store.getCachedPaths();
      expect(cachedPaths).toEqual(['/test.app', '/file']);

      store.close('/folder');
      cachedPaths = store.getCachedPaths();
      expect(cachedPaths).toEqual(['/test.app', '/file', '/folder']);
    });
  });

  it('should preserve state when opening and closing a process', () => {
    act(() => {
      store.open(['/test.app', '/file', '/folder']);
      const sizePos1 = { size: { width: 100, height: 100 }, position: { x: 100, y: 100 } };
      const sizePos2 = { size: { width: 200, height: 200 }, position: { x: 200, y: 200 } };
      const sizePos3 = { size: { width: 300, height: 300 }, position: { x: 300, y: 300 } };
      store.setWindow('/test.app', sizePos1);
      store.setWindow('/file', sizePos2);
      store.setWindow('/folder', sizePos3);
      expect(store.getWindow('/test.app')).toEqual(sizePos1);
      expect(store.getWindow('/file')).toEqual(sizePos2);
      expect(store.getWindow('/folder')).toEqual(sizePos3);

      store.closeAll();
      store.open(['/test.app', '/file', '/folder']);
      expect(store.getWindow('/test.app')).toEqual(sizePos1);
      expect(store.getWindow('/file')).toEqual(sizePos2);
      expect(store.getWindow('/folder')).toEqual(sizePos3);
    });
  });
});