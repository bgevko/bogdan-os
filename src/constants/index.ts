import { lazy } from 'react';

import { AppDirectory, Paths } from '@/types';

// File System
export const startingDir: Paths = [
  '/',
  '/Desktop/HelloWorld',
  '/Desktop/Terminal.app',
  '/Desktop/MyFolder/MyFile',
];

// Processes
export const appDirectory: AppDirectory = new Map([
  [
    '',
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
]);

export const FileExplorer = lazy(() => import('@/components/apps/file-explorer'));
export const DefaultApp = lazy(() => import('@/components/apps/hello-world'));

// Static paths
export const iconsPath = '/icons/system';
