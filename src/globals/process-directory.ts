import { lazy } from 'react';

import { type ProcessComponents } from '@/types/processes';

export const iconDirectory = '/icons/system/';

export const processComponents: ProcessComponents = new Map([
  [
    'default',
    {
      icon: 'default',
      component: lazy(() => import('@/components/apps/hello-world')),
    },
  ],
  [
    'app',
    {
      icon: 'executable',
      component: lazy(() => import('@/components/apps/terminal')),
    },
  ],
  [
    '',
    {
      icon: 'folder',
      component: lazy(() => import('@/components/apps/file-explorer')),
    },
  ],
]);
