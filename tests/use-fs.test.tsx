/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import useFsStore from '@/stores/use-fs-store';

import { testFileSystem } from './globals';

beforeEach(() => {
  const { result } = renderHook(() => useFsStore());
  act(() => {
    result.current.setFileSystem(testFileSystem);
    result.current.setCurrentPath('/');
  });
});

describe('useFsStore', () => {
  it('Should be in the root directory', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      expect(result.current.currentPath).toEqual('/');
    });
  });
  it('Should change the current path to /Desktop', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      result.current.setCurrentPath('/Desktop');
    });
    act(() => {
      expect(result.current.currentPath).toEqual('/Desktop');
    });
  });
  it('Should throw an error when trying to go to a non-existent directory', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      expect(() => {
        result.current.setCurrentPath('/NonExistent');
      }).toThrowError();
    });
  });
  it('Should throw an error when trying to set the current path to a file', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      expect(() => {
        result.current.setCurrentPath('/Desktop/HelloWorld');
      }).toThrowError();
    });
  });
  it('Should return children appropriately', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      const rootChildren = result.current.getChildren('/');
      expect(rootChildren).toEqual(['/Desktop', '/Documents']);
    });

    act(() => {
      result.current.setCurrentPath('/Desktop');
      const desktopChildren = result.current.getChildren('/Desktop');
      expect(desktopChildren).toEqual(['/Desktop/HelloWorld', '/Desktop/MyFolder']);
    });

    act(() => {
      result.current.setCurrentPath('/');
      const rootChildren = result.current.getChildren('/Desktop', { filesOnly: true });
      expect(rootChildren).toEqual(['/Desktop/HelloWorld']);
    });

    act(() => {
      result.current.setCurrentPath('/Documents');
      const documentsChildren = result.current.getChildren('/Documents');
      expect(documentsChildren).toEqual([]);
    });
  });
  it('Should set directory item position correctly', () => {
    const { result } = renderHook(() => useFsStore());
    act(() => {
      result.current.setItemPosition('/Desktop/HelloWorld', { x: 100, y: 100 });
    });
    act(() => {
      const itemPosition = result.current.getItemPosition('/Desktop/HelloWorld');
      expect(itemPosition).toEqual({ x: 100, y: 100 });
    });

    act(() => {
      result.current.setItemPosition('/Desktop/HelloWorld', { x: 200, y: 200 });
    });
    act(() => {
      const itemPosition = result.current.getItemPosition('/Desktop/HelloWorld');
      expect(itemPosition).toEqual({ x: 200, y: 200 });
    });

    act(() => {
      result.current.setItemPosition('/Desktop/MyFolder', { x: 300, y: 300 });
    });

    act(() => {
      const itemPosition = result.current.getItemPosition('/Desktop/MyFolder');
      expect(itemPosition).toEqual({ x: 300, y: 300 });
    });
  });
});
