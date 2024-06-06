import { lazy } from 'react';

import { type Processes } from '@/types/processes';

const testProcesses: Processes = {
  Test1: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 1',
    hasWindow: true,
    minSize: { width: 300, height: 300 },
    maximized: false,
    position: { x: 0, y: 0 },
    size: { width: 300, height: 300 },
    isAnimating: false,
  },
  Test2: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 2',
    hasWindow: true,
    minSize: { width: 300, height: 300 },
    maximized: false,
    position: { x: 0, y: 0 },
    size: { width: 300, height: 300 },
    isAnimating: false,
  },
  Test3: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 3',
    hasWindow: true,
    minSize: { width: 300, height: 300 },
    maximized: false,
    position: { x: 0, y: 0 },
    size: { width: 300, height: 300 },
    isAnimating: false,
  },
};

export default testProcesses;
