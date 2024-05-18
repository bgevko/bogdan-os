import { lazy } from 'react';

import { type Processes } from '@/types/processes';

// Set all processes that can be loaded here
export const processDirectory: Processes = {
  HelloWorld: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    hasWindow: true,
  },
};

// Processes that will load on startup
export const startupProcesses: string[] = ['HelloWorld'];
