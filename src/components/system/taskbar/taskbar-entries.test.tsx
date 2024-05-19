/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act, render } from '@testing-library/react';
import { lazy } from 'react';
import { it, expect, describe, beforeEach } from 'vitest';

import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import useProcessesStore from '@/stores/use-processes-store';
import { type Processes } from '@/types/processes';

const testProcesses: Processes = {
  Test1: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 1',
    hasWindow: true,
  },
  Test2: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 2',
    hasWindow: true,
  },
  Test3: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 3',
    hasWindow: true,
  },
};

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

describe('TaskbarEntries', () => {
  it('should not have any entries on initial load', () => {
    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');
    expect(taskbarList?.children.length).toBe(0);
  });

  it('should add a new taskbar entry when a process is opened', () => {
    const processToOpen = 'Test1';
    const { result } = renderHook(() => useProcessesStore());

    act(() => {
      result.current.open(processToOpen);
    });

    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');

    expect(taskbarList?.children.length).toBe(1);
  });

  it('should remove a taskbar entry when a process is closed', () => {
    const processToOpen = 'Test1';
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(processToOpen);
    });
    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');
    expect(taskbarList?.children.length).toBe(1);
    act(() => {
      result.current.close(processToOpen);
    });
    expect(taskbarList?.children.length).toBe(0);
  });

  it('should correctly open multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(['Test1', 'Test2', 'Test3']);
    });
    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');
    expect(taskbarList?.children.length).toBe(3);
  });

  it('should correctly close multiple processes', () => {
    const { result } = renderHook(() => useProcessesStore());
    act(() => {
      result.current.open(['Test1', 'Test2', 'Test3']);
    });
    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');
    expect(taskbarList?.children.length).toBe(3);
    act(() => {
      result.current.close(['Test1', 'Test2', 'Test3']);
    });
    expect(taskbarList?.children.length).toBe(0);
  });
});
