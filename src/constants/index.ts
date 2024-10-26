import { lazy } from 'react';

import { AppDirectory, Paths, AppOptions } from '@/types';

// File System
export const startingDir: Paths = [
  '/',
  '/Desktop/Excalidraw.app',
  // '/Desktop/file2',
  // '/Desktop/Terminal.app',
  // '/Desktop/MyFolder/MyFile',
  '/Desktop/Solitaire.app',
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

// Options
export const appOptions: AppOptions = new Map([
  [
    'Solitaire.app',
    {
      icon: 'solitaire',
      minSize: { width: 800, height: 600 },
      disableDelete: true,
      component: lazy(() => import('@/components/apps/solitaire')),
      //   fileName?: string;
      //   fileExt?: string;
      //   hasWindow?: boolean;
      //   position?: Position;
      //   size?: Size;
      //   defaultSizePos?: SizePos;
    },
  ],
  [
    'Excalidraw.app',
    {
      icon: 'executable',
      minSize: { width: 900, height: 800 },
      disableDelete: true,
      disableSelection: true,
      component: lazy(() => import('@/components/apps/excalidraw')),
    },
  ],
]);

export const FileExplorer = lazy(() => import('@/components/apps/file-explorer'));
export const DefaultApp = lazy(() => import('@/components/apps/hello-world'));

// Other
export const iconsPath = '/icons/system';
export const folderIconPath = '/icons/system/folder.png';
