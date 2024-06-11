import { lazy } from 'react';

import { type ProcessComponents, Processes, WindowState } from '@/types/processes';

export const iconDirectory = '/icons/system/';

const processDirectory: ProcessComponents = {
  HelloWorld: {
    title: 'Hello Title',
    icon: 'folder',
    Component: lazy(() => import('@/components/apps/hello-world')),
  },
  Terminal: {
    title: 'Terminal',
    icon: 'terminal',
    Component: lazy(() => import('@/components/apps/terminal')),
    minSize: { width: 600, height: 300 },
    defaultWindow: {
      size: { width: 800, height: 400 },
      position: { x: 300, y: 300 },
    },
  },
};

export function getProcessDirectory(customDirectory?: ProcessComponents): Processes {
  const directory = customDirectory ?? processDirectory;
  const zeroDimensions = { size: { width: 0, height: 0 }, position: { x: 0, y: 0 } };
  // Fill in default values if not provided
  const defaultValues: WindowState = {
    hasWindow: true,
    maximized: false,
    minSize: { width: 300, height: 300 },
    position: { x: 300, y: 300 },
    defaultWindow: {
      size: { width: 400, height: 400 },
      position: { x: 300, y: 300 },
    },
    size: { width: 400, height: 400 },
    isAnimating: false,
    minimized: false,
    opacity: 1,
    maximizedWindow: zeroDimensions,
    unMaximizedWindow: zeroDimensions,
    minimizedWindow: zeroDimensions,
    unMinimizedWindow: zeroDimensions,
  };
  const newDirectory: Processes = {};
  for (const process in directory) {
    if (Object.prototype.hasOwnProperty.call(directory, process)) {
      newDirectory[process] = { ...defaultValues, ...directory[process] };
    }
  }
  return newDirectory;
}

// Processes that will load on startup
export const openedProcesses: string[] = ['HelloWorld'];
