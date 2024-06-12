import { FileSystem } from '@/types/file-system';

const fileSystem: FileSystem = {
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
  '/Documents': {
    name: 'Documents',
    type: 'directory',
  },
};

export default fileSystem;
