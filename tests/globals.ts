import { lazy } from 'react';

import { type ProcessComponents } from '@/types/processes';

const testProcesses: ProcessComponents = {
  Test1: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 1',
  },
  Test2: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 2',
  },
  Test3: {
    Component: lazy(() => import('@/components/apps/hello-world')),
    icon: '👋',
    title: 'Test 3',
  },
};

export default testProcesses;
