import { lazy } from 'react';

import { type FileNodeData } from '@/globals/starting-directory';
import { type ProcessComponents } from '@/types/processes';

export const testDir: FileNodeData = {
  path: '/',
  children: [
    {
      path: '/Desktop',
      children: [
        {
          path: '/Desktop/HelloWorld.test',
        },
        {
          path: '/Desktop/MyFolder',
        },
      ],
    },
    {
      path: '/Documents',
    },
  ],
};

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
