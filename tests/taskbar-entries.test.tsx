/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { renderHook, act, render } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import { getProcessDirectory } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';

import testProcesses from './globals';

const processes = getProcessDirectory(testProcesses);

beforeEach(() => {
  const { result } = renderHook(() => useProcessesStore());
  act(() => {
    result.current.reset();
  });
  act(() => {
    result.current.setProcessDirectory(processes);
  });
  expect(result.current.processDirectory).toEqual(processes);
  expect(result.current.openedProcesses).toEqual({});
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
