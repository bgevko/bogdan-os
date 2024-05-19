/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import { lazy } from 'react';
import { it, expect, describe } from 'vitest';

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

describe('useProcessesStore', () => {
  it('should initialize global process directory', () => {
    const { result } = renderHook(() => useProcessesStore());
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
});
