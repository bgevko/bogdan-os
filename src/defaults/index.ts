import { lazy } from 'react';

import {
  type File,
  LazyAppComponent,
  MenubarOptions,
  ContextMenuOptions,
} from '@/system/file-system/store';

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

interface AppWithExtras extends File {
  component: LazyAppComponent;
  menubarOptions?: MenubarOptions;
  contextMenuOptions?: ContextMenuOptions;
}

export const applications = new Map<string, Omit<AppWithExtras, 'iconPosition'>>([
  [
    'excalidraw',
    {
      ...appMetadata,
      id: 'excalidraw',
      icon: 'excalidraw',
      name: 'Excalidraw',
      disableMobile: false,
      defaultWindowSize: { width: 800, height: 640 },
      component: lazy(() => import('@/apps/excalidraw')),
    },
  ],
  [
    'readme',
    {
      ...appMetadata,
      id: 'readme',
      icon: 'file',
      name: 'Readme',
      disableMobile: false,
      component: lazy(() => import('@/apps/readme')),
    },
  ],
  [
    'solitaire',
    {
      ...appMetadata,
      id: 'solitaire',
      icon: 'solitaire',
      name: 'Solitaire',
      disableMobile: true,
      defaultWindowSize: { width: 850, height: 650 },
      component: lazy(() => import('@/apps/solitaire')),
      menubarOptions: {
        source: import('@/apps/solitaire/menubar').then((module) => module.default),
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
      disableMobile: true,
      defaultWindowSize: { width: 520, height: 550 },
      component: lazy(() => import('@/apps/headers')),
      menubarOptions: {
        source: import('@/apps/headers/menubar').then((module) => module.default),
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
      component: lazy(() => import('@/apps/hello-world')),
      disableMobile: true,
      defaultWindowSize: { width: 520, height: 550 },
    },
  ],
]);

/*
 ********************************
 *                              *
 *            Helpers           *
 *                              *
 ********************************
 */
export function getComponent(id: string, type: string): LazyAppComponent | null {
  // I have to use this because I can't pull the component directly from the store, apparently.
  // It's something to do with immer, lazy loading, and immutability. Frankly, it's too complicated
  // so I'm hacking it like the hack I am. It's not a big deal, since I only use the component in one place.
  if (type === 'directory') {
    return lazy(() => import('@/system/file-system/directory'));
  }

  const app = applications.get(id);
  if (app) {
    return app.component;
  }
  return null;
}

export function getMenubarOptions(id: string): MenubarOptions | null {
  const app = applications.get(id);
  if (app) {
    return app.menubarOptions ?? null;
  }
  return null;
}

export function getContextMenuOptions(id: string): ContextMenuOptions | null {
  const app = applications.get(id);
  if (app) {
    return app.contextMenuOptions ?? null;
  }
  return null;
}
