import { lazy } from 'react';

import { AppDirectory, Paths, AppOptions } from '@/types';

// File System
export const startingDir: Paths = [
  '/',
  '/Desktop/Excalidraw.app',
  // '/Desktop/file2',
  // '/Desktop/Terminal.app',
  '/Desktop/MyFolder/',
  '/Desktop/Readme.app',
  // '/Desktop/Solitaire.app',
];

// Processes
export const appDirectory: AppDirectory = new Map([
  [
    '',
    {
      icon: 'file',
      component: lazy(() => import('@/components/apps/hello-world')),
    },
  ],
  [
    'app',
    {
      icon: 'file',
      component: lazy(() => import('@/components/apps/readme')),
    },
  ],
]);

// Options
export const appOptions: AppOptions = new Map([
  [
    'Solitaire.app',
    {
      icon: 'solitaire',
      iconName: 'solitaire',
      minSize: { width: 800, height: 600 },
      disableDelete: true,
      component: lazy(() => import('@/components/apps/solitaire')),
    },
  ],
  [
    'Excalidraw.app',
    {
      icon: 'excalidraw',
      iconName: 'excalidraw',
      minSize: { width: 800, height: 600 },
      disableDelete: true,
      component: lazy(() => import('@/components/apps/excalidraw')),
    },
  ],
]);

export const FileExplorer = lazy(() => import('@/components/apps/file-explorer'));
export const DefaultApp = lazy(() => import('@/components/apps/hello-world'));

// Other
export const iconsPath = '/icons/system';
export const folderIconPath = '/icons/system/folder.png';
