import { lazy } from 'react';

import { type Processes } from '@/types/processes';

// Set all processes that can be loaded here
export const processDirectory: Processes = {
  HelloWorld: {
    title: 'Hello Title',
    icon: 'hello-world',
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
    maximized: false,
    minSize: { width: 300, height: 300 },
    position: { x: 300, y: 300 },
    size: { width: 400, height: 400 },
  },
};

// Processes that will load on startup
export const openedProcesses: string[] = ['HelloWorld'];
