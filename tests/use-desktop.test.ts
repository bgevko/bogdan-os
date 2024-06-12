import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import useDesktopStore from '@/stores/use-desktop-store';

beforeEach(() => {
  const { result } = renderHook(() => useDesktopStore());
  act(() => {
    result.current.addItems(['HelloWorld', 'Terminal']);
  });
});

describe('useFsStore', () => {
  it('Should be in the root directory', () => {
    const { result } = renderHook(() => useDesktopStore());
    act(() => {
      expect(result.current.desktopItems).length(2);
    });
  });

  it('Should be able to remove items', () => {
    const { result } = renderHook(() => useDesktopStore());
    act(() => {
      result.current.removeItems(['HelloWorld', 'Terminal']);
    });
    act(() => {
      expect(result.current.desktopItems).length(0);
    });
  });

  it('Should be able to get item position', () => {
    const { result } = renderHook(() => useDesktopStore());
    act(() => {
      expect(result.current.getItemPosition('HelloWorld')).toEqual({ x: 0, y: 0 });
    });
  });

  it('Should be able to set item position', () => {
    const { result } = renderHook(() => useDesktopStore());
    act(() => {
      result.current.setItemPosition('HelloWorld', { x: 100, y: 100 });
    });
    act(() => {
      expect(result.current.getItemPosition('HelloWorld')).toEqual({ x: 100, y: 100 });
    });
  });
});
