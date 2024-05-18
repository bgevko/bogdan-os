/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react';
import { lazy } from 'react';
import { it, expect, describe } from 'vitest';

import { useProcessStore, useSelectProcesses } from '@/stores/use-processes';
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
  it('should initialize with empty processes', () => {
    const { result } = renderHook(() => useProcessStore());
    expect(result.current.processes).toEqual({});
  });

  it('should set all processes', () => {
    const { result } = renderHook(() => useProcessStore());
    act(() => {
      result.current.setProcesses(testProcesses);
    });
    expect(result.current.processes).toEqual(testProcesses);
  });

  it('should select subset of processes', () => {
    const { result: result1 } = renderHook(() => useProcessStore());
    act(() => {
      result1.current.setProcesses(testProcesses);
    });

    const { result: result2 } = renderHook(() => useSelectProcesses(subsetProcesses));
    expect(Object.keys(result2.current)).toEqual(subsetProcesses);
  });
});
