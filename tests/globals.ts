import { lazy } from 'react';

import { type FileSystem } from '@/types/file-system';
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

export const testFileSystem: FileSystem = {
  '/': {
    name: 'root',
    type: 'directory',
  },
  '/Desktop': {
    name: 'Desktop',
    type: 'directory',
  },
  '/Desktop/HelloWorld': {
    name: 'HelloWorld.app',
    type: 'file',
  },
  '/Desktop/MyFolder': {
    name: 'MyFolder',
    type: 'directory',
  },
  '/Documents': {
    name: 'Documents',
    type: 'directory',
  },
};
export default testProcesses;
