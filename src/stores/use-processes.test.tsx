/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import { lazy } from 'react';
import { it, expect, describe, beforeEach } from 'vitest';

import { processDirectory } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';
import { type Processes } from '@/types/processes';

const testProcesses: Processes = {
  Test1: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
  Test2: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
  Test3: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
};

const subsetProcesses: string[] = ['Test1', 'Test3'];

beforeEach(() => {
  const { result } = renderHook(() => useProcessesStore());
  act(() => {
    result.current.reset();
  });
  act(() => {
    result.current.setProcessDirectory(testProcesses);
  });
  expect(result.current.processDirectory).toEqual(testProcesses);
  expect(result.current.openedProcesses).toEqual([]);
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

  it('should select subset of processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
      const selectedProcesses = result.current.getProcesses(subsetProcesses);
      expect(Object.keys(selectedProcesses)).toEqual(subsetProcesses);
    });
  });

  it('should throw an error when trying to select non-existent processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
      expect(() => {
        result.current.getProcesses(['Test4']);
      }).toThrowError();
    });
  });

  it('should correctly open a process', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open('Test1');
    });

    expect(result.current.openedProcesses).toEqual(['Test1']);
  });

  it('should correctly close a process', () => {
    const { result } = renderHook(() => useProcessesStore());
    // act(() => {
    //   result.current.setProcessDirectory(testProcesses);
    //   result.current.openProcess('Test1');
    //   result.current.closeProcess('Test1');
    //   expect(result.current.openedProcesses).toEqual([]);
    // });
    act(() => {
      result.current.setProcessDirectory(testProcesses);
    });
    act(() => {
      result.current.open('Test1');
    });
    act(() => {
      result.current.close('Test1');
    });
    expect(result.current.openedProcesses).toEqual([]);
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
    expect(result.current.openedProcesses).toEqual(['Test1', 'Test2']);
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
    expect(result.current.openedProcesses).toEqual([]);
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
    expect(result.current.openedProcesses).toEqual(['Test1', 'Test2', 'Test3']);
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
    expect(result.current.openedProcesses).toEqual([]);
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
});
