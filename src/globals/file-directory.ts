import { FileSystem } from '@/types/file-system';

const fileDirectory: FileSystem = {
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
  '/Desktop/Terminal': {
    name: 'Terminal.app',
    type: 'file',
  },

  '/Documents': {
    name: 'Documents',
    type: 'directory',
  },
};

export default fileDirectory;
