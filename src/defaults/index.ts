import { lazy } from 'react';

import { type File, Directory } from '@/system/file-system/store';

/*
 ****************************************************************
 *                                                              *
 *                         Applications                         *
 *                                                              *
 ****************************************************************
 */

const appMetadata: Omit<File, 'iconPosition' | 'id' | 'name' | 'disableMobile' | 'component'> = {
  type: 'file',
  extension: '.app',
  createdAt: new Date(),
  updatedAt: new Date(),
  parentId: 'desktop',
  content: '',
  defaultWindowSize: { width: 400, height: 500 },
  iconColor: '#fff',
  iconSize: 64,
  isIconSelected: false,
  isIconDragging: false,
};

export const applications = new Map<string, Omit<File, 'iconPosition'>>([
  [
    'excalidraw',
    {
      ...appMetadata,
      id: 'excalidraw',
      icon: 'excalidraw',
      name: 'Excalidraw',
      component: lazy(() => import('@/apps/solitaire')),
      disableMobile: false,
      defaultWindowSize: { width: 800, height: 640 },
    },
  ],
  [
    'readme',
    {
      ...appMetadata,
      id: 'readme',
      icon: 'file',
      name: 'Readme',
      component: lazy(() => import('@/apps/readme')),
      disableMobile: false,
    },
  ],
  [
    'solitaire',
    {
      ...appMetadata,
      id: 'solitaire',
      icon: 'solitaire',
      name: 'Solitaire',
      component: lazy(() => import('@/apps/solitaire')),
      disableMobile: true,
      defaultWindowSize: { width: 850, height: 650 },
      menubarOptions: {
        source: import('@/apps/solitaire/menu-bar').then((module) => module.default),
      },
    },
  ],
  [
    'headers',
    {
      ...appMetadata,
      id: 'headers',
      icon: 'headers',
      name: 'Headers',
      component: lazy(() => import('@/apps/headers')),
      disableMobile: true,
      defaultWindowSize: { width: 520, height: 550 },
      menubarOptions: {
        source: import('@/apps/headers/menu-bar').then((module) => module.default),
        className: 'border-b',
      },
    },
  ],
  [
    'hello-txt',
    {
      ...appMetadata,
      id: 'hello-txt',
      icon: 'file',
      name: 'Hello',
      extension: '.txt',
      content: 'Hello, World!',
      component: lazy(() => import('@/apps/headers')),
      disableMobile: true,
      defaultWindowSize: { width: 520, height: 550 },
      menubarOptions: {
        source: import('@/apps/headers/menu-bar').then((module) => module.default),
        className: 'border-b',
      },
    },
  ],
]);

/*
 ****************************************************************
 *                                                              *
 *                          Directories                         *
 *                                                              *
 ****************************************************************
 */
const directoryMeta: Omit<Directory, 'id' | 'name' | 'children' | 'iconPosition'> = {
  type: 'directory',
  createdAt: new Date(),
  updatedAt: new Date(),
  iconSize: 64,
  defaultWindowSize: { width: 400, height: 500 },
  parentId: 'desktop',
  iconColor: '#fff',
  isIconSelected: false,
  isIconDragging: false,
};

export const directories = new Map<string, Omit<Directory, 'iconPosition'>>([
  [
    'my-folder',
    {
      ...directoryMeta,
      id: 'my-folder',
      name: 'MyFolder',
      icon: 'folder',
      children: [],
    },
  ],
]);
