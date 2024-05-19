/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act, render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import TaskbarEntries from '@/components/system/taskbar/taskbar-entries';
import { processDirectory } from '@/globals/process-directory';
import useProcessesStore from '@/stores/use-processes-store';

beforeEach(() => {
  const { result } = renderHook(() => useProcessesStore());
  act(() => {
    result.current.reset();
  });
  expect(result.current.openedProcesses).toEqual([]);
});

describe('TaskbarEntries', () => {
  it('should not have any entries on initial load', () => {
    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');
    expect(taskbarList?.children.length).toBe(0);
  });

  it('should add a new taskbar entry when a process is opened', () => {
    const processToOpen = Object.keys(processDirectory)[0];
    const { result } = renderHook(() => useProcessesStore());

    act(() => {
      result.current.open(processToOpen);
    });

    const { container } = render(<TaskbarEntries />);
    const taskbarList = container.querySelector('ol');

    expect(taskbarList?.children.length).toBe(1);
    expect(screen.getByText(processDirectory[processToOpen].title)).toBeInTheDocument();
  });

  it('should remove a taskbar entry when a process is closed', () => {
    const processToOpen = Object.keys(processDirectory)[0];
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
});
