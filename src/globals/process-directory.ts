import { lazy } from 'react';

import { type Processes } from '@/types/processes';

export const iconDirectory = '/icons/system/';

export const testDirectory: Processes = {
  HelloWorld: {
    title: 'Hello Title',
    icon: 'folder',
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
    maximized: false,
    minSize: { width: 300, height: 300 },
    position: { x: 300, y: 300 },
    size: { width: 400, height: 400 },
    isAnimating: false,
    isMinimized: false,
  },
};

export const processDirectory: Processes = {
  HelloWorld: {
    title: 'Hello Title',
    icon: 'folder',
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
    maximized: false,
    minSize: { width: 300, height: 300 },
    position: { x: 300, y: 300 },
    size: { width: 400, height: 400 },
    isAnimating: false,
    isMinimized: false,
  },
};

// Processes that will load on startup
export const openedProcesses: string[] = ['HelloWorld'];
