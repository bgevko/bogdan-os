import { lazy } from 'react';

import { AppDirectory, Paths } from '@/types';

// File System
export const startingDir: Paths = [
  '/',
  '/Desktop/file1',
  '/Desktop/file2',
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

// Other
export const iconsPath = '/icons/system';
export const folderIconPath = '/icons/system/folder.png';
