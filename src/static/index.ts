import { lazy } from 'react';

import { Paths, AppOptions, InitialProcessConfig } from '@/types';
import { parseFullFileName } from '@/utils/fs';

// File System
export const startingDir: Paths = [
  '/',
  '/Desktop/Excalidraw.app',
  '/Desktop/MyFolder/',
  '/Desktop/Readme.app',
  '/Desktop/Solitaire.app',
];

// Processes
const FileOrFolder: AppOptions = new Map([
  // default placeholder for now
  [
    'file',
    {
      iconName: 'file',
      fileName: 'file',
      fileExt: '',
      hasWindow: true,
      disableDelete: false,
      component: lazy(() => import('@/apps/hello-world')),
      disableMobile: false,

      // Initial window state
      size: { width: 400, height: 400 },
    },
  ],
  [
    'folder',
    {
      iconName: 'folder',
      fileName: 'folder',
      fileExt: '',
      hasWindow: true,
      disableDelete: false,
      component: lazy(() => import('@/components/system/file-explorer')),
      disableMobile: false,

      // Initial window state
      size: { width: 400, height: 400 },
    },
  ],
]);

// Options
const appOptions: AppOptions = new Map<string, InitialProcessConfig>([
  [
    'Solitaire.app',
    {
      iconName: 'solitaire',
      fileName: 'Solitaire.app',
      fileExt: '.app',
      hasWindow: true,
      disableDelete: true,
      component: lazy(() => import('@/apps/solitaire')),
      disableMobile: true,

      // Initial window state
      size: { width: 850, height: 650 },
      menuBarOptions: import('@/apps/solitaire/menu-bar').then((module) => module.default),
    },
  ],
  [
    'Excalidraw.app',
    {
      iconName: 'excalidraw',
      fileName: 'Excalidraw.app',
      fileExt: '.app',
      hasWindow: true,
      disableDelete: true,
      component: lazy(() => import('@/apps/excalidraw')),
      disableMobile: false,

      // Initial window state
      size: { width: 800, height: 640 },
    },
  ],
  [
    'Readme.app',
    {
      iconName: 'file',
      iconColor: '#FFEFE0',
      fileName: 'Readme.app',
      fileExt: '.app',
      hasWindow: true,
      disableDelete: true,
      component: lazy(() => import('@/apps/readme')),
      disableMobile: false,

      // Initial window state
      size: { width: 400, height: 500 },
    },
  ],
]);

export function getProcessOptions(path: string, isDir: boolean): InitialProcessConfig {
  // if the path isn't a key in one of the app options, we'll return either a file or folder,
  // depending on how the path is formatted
  const key = parseFullFileName(path);

  if (!appOptions.has(key)) {
    // grab file explorer if isDir is set
    if (isDir) {
      return FileOrFolder.get('folder')!;
    }
    // Otherwise, we'll default to a file
    return FileOrFolder.get('file')!;
  }

  // Otherwise, return the app options
  const options = appOptions.get(key)!;

  // If no color set, default to white
  if (!options.iconColor) {
    options.iconColor = 'white';
  }
  return options;
}
