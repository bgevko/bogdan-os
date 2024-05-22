import { lazy } from 'react';

import { type Processes } from '@/types/processes';

// Set all processes that can be loaded here
export const processDirectory: Processes = {
  HelloWorld: {
    title: 'Hello Title',
    icon: 'hello-world',
    minSize: { width: 300, height: 300 },
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
};

// Processes that will load on startup
export const openedProcesses: string[] = ['HelloWorld'];
