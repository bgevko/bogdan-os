import { create } from 'zustand';

import fileSystem from '@/globals/file-system';
import { FileSystem } from '@/types/file-system';

function pathExists(fs: FileSystem, path: string): boolean {
  return Object.keys(fs).includes(path);
}

function isDirectory(fs: FileSystem, path: string): boolean {
  if (!pathExists(fs, path)) return false;
  return fs[path].type === 'directory';
}

interface FileSystemState {
  fileSystem: FileSystem;
  currentPath: string;
  setFileSystem: (fs: FileSystem) => void;
  setCurrentPath: (path: string) => void;
  getCurrentDirectory: () => string;
  getChildren: (path: string) => string[];
}

const useFsStore = create<FileSystemState>((set, get) => ({
  fileSystem,
  currentPath: '/',
  setFileSystem: (fs) => {
    set({ fileSystem: fs });
  },
  setCurrentPath: (path) => {
    if (!pathExists(get().fileSystem, path)) {
      throw new Error(`No such file or directory: ${path}`);
    }
    if (!isDirectory(get().fileSystem, path)) {
      throw new Error(`Not a directory: ${path}`);
    }
    set({ currentPath: path });
  },
  getCurrentDirectory: () => get().currentPath,
  getChildren: (path) => {
    if (!pathExists(get().fileSystem, path)) {
      throw new Error(`No such file or directory: ${path}`);
    }
    const parentPrefix = path === '/' ? path : `${path}/`;
    return Object.keys(get().fileSystem).filter((p) => {
      if (!p.startsWith(parentPrefix) || p === path) return false;
      const relativePath = p.slice(parentPrefix.length);
      return !relativePath.includes('/');
    });
  },
}));

export default useFsStore;
