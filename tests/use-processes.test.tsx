/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { renderHook, act } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { processDirectory } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';

import testProcesses from './globals';

beforeEach(() => {
  const { result } = renderHook(() => useProcessesStore());
  act(() => {
    result.current.reset();
  });
  act(() => {
    result.current.setProcessDirectory(testProcesses);
  });
  expect(result.current.processDirectory).toEqual(testProcesses);
  expect(result.current.openedProcesses).toEqual({});
});

describe('useProcessesStore', () => {
  it('should initialize global process directory', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.reset();
    });
    expect(result.current.processDirectory).toEqual(processDirectory);
  });

  it('should override existing processes when using set', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    expect(result.current.processDirectory).toEqual(testProcesses);
  });

  it('should correctly open a process', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open('Test1');
    });

    expect(result.current.openedProcesses).toEqual({
      Test1: testProcesses.Test1,
    });
  });

  it('should correctly close a process', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open('Test1');
    });
    act(() => {
      result.current.close('Test1');
    });
    expect(result.current.openedProcesses).toEqual({});
  });

  it('should throw an error when trying to open a non-existent process', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
      expect(() => {
        result.current.open('Test4');
      }).toThrowError();
    });
  });

  it('should throw an error when trying to close a non-existent process', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
      expect(() => {
        result.current.close('Test4');
      }).toThrowError();
    });
  });

  it('should throw an error when trying to close a process that is not open', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
      expect(() => {
        result.current.close('Test1');
      }).toThrowError();
    });
  });

  it('should correctly open multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open(['Test1', 'Test2']);
    });
    expect(result.current.openedProcesses).toEqual({
      Test1: testProcesses.Test1,
      Test2: testProcesses.Test2,
    });
  });

  it('should correctly close multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open(['Test1', 'Test2']);
    });
    act(() => {
      result.current.close(['Test1', 'Test2']);
    });
    expect(result.current.openedProcesses).toEqual({});
  });

  it('should correctly open a single process, followed by multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open('Test1');
    });
    act(() => {
      result.current.open(['Test2', 'Test3']);
    });
    expect(result.current.openedProcesses).toEqual({
      Test1: testProcesses.Test1,
      Test2: testProcesses.Test2,
      Test3: testProcesses.Test3,
    });
  });

  it('should correctly close a single process, followed by multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open(['Test1', 'Test2', 'Test3']);
    });
    act(() => {
      result.current.close('Test1');
    });
    act(() => {
      result.current.close(['Test2', 'Test3']);
    });
    act(() => {
      expect(result.current.openedProcesses).toEqual({});
    });
  });

  it('should throw an error when opening multiple processes and one does not exist', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      expect(() => {
        result.current.open(['Test1', 'Test4']);
      }).toThrowError();
    });
  });

  it('should throw an error when closing multiple processes and one does not exist', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open(['Test1', 'Test2', 'Test3']);
    });
    act(() => {
      expect(() => {
        result.current.close(['Test1', 'Test4']);
      }).toThrowError();
    });
  });

  it('should throw an error when closing multiple processes and one is not open', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open(['Test1', 'Test2']);
    });
    act(() => {
      expect(() => {
        result.current.close(['Test1', 'Test3']);
      }).toThrowError();
    });
  });

  it('should maximize the window correctly', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(['Test1']);
    });
    act(() => {
      expect(result.current.openedProcesses.Test1.maximized).toBe(false);
    });
    act(() => {
      result.current.setWindowMaximized('Test1', true);
    });
    act(() => {
      const maximized = result.current.getWindowMaximized('Test1');
      expect(result.current.openedProcesses.Test1.maximized).toBe(true);
      expect(maximized).toBe(true);
    });
    act(() => {
      result.current.setWindowMaximized('Test1', false);
    });
    act(() => {
      const maximized = result.current.getWindowMaximized('Test1');
      expect(result.current.openedProcesses.Test1.maximized).toBe(false);
      expect(maximized).toBe(false);
    });
  });

  it('should set position correctly', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(['Test1']);
    });
    act(() => {
      const position = result.current.getWindowPosition('Test1');
      expect(result.current.openedProcesses.Test1.position).toEqual({ x: 0, y: 0 });
      expect(position).toEqual({ x: 0, y: 0 });
    });
    act(() => {
      result.current.setWindowPosition('Test1', { x: 10, y: 20 });
    });
    act(() => {
      const position = result.current.getWindowPosition('Test1');
      expect(result.current.openedProcesses.Test1.position).toEqual({ x: 10, y: 20 });
      expect(position).toEqual({ x: 10, y: 20 });
    });
  });

  it('should set size correctly', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(['Test1']);
    });
    act(() => {
      result.current.setWindowSize('Test1', { width: 100, height: 200 });
    });
    act(() => {
      const size = result.current.getWindowSize('Test1');
      expect(result.current.openedProcesses.Test1.size).toEqual({ width: 100, height: 200 });
      expect(size).toEqual({ width: 100, height: 200 });
    });
  });
});
