import { create } from 'zustand';

import fileDirectory from '@/globals/file-directory';
import { FileSystem } from '@/types/file-system';

function pathExists(fs: FileSystem, path: string): boolean {
  return Object.keys(fs).includes(path);
}

function isDirectory(fs: FileSystem, path: string): boolean {
  if (!pathExists(fs, path)) return false;
  return fs[path].type === 'directory';
}

function validatePath(fs: FileSystem, path: string): void {
  if (!pathExists(fs, path)) {
    throw new Error(`No such file or directory: ${path}`);
  }
}

function validateDirectory(fs: FileSystem, path: string): void {
  if (!isDirectory(fs, path)) {
    throw new Error(`Not a directory: ${path}`);
  }
}

interface FileSystemState {
  fileDirectory: FileSystem;
  currentPath: string;
  setFileSystem: (fs: FileSystem) => void;
  setCurrentPath: (path: string) => void;
  getCurrentDirectory: () => string;
  getChildren: (path: string, options?: { filesOnly: boolean }) => string[];
}

const useFsStore = create<FileSystemState>((set, get) => ({
  fileDirectory,
  currentPath: '/',
  setFileSystem: (fs) => {
    set({ fileDirectory: fs });
  },
  setCurrentPath: (path) => {
    validatePath(get().fileDirectory, path);
    validateDirectory(get().fileDirectory, path);
    set({ currentPath: path });
  },
  getCurrentDirectory: () => get().currentPath,
  getChildren: (path, options?) => {
    validatePath(get().fileDirectory, path);
    const parentPrefix = path === '/' ? path : `${path}/`;
    const filesOnly = options?.filesOnly ?? false;
    return Object.keys(get().fileDirectory).filter((p) => {
      if (!p.startsWith(parentPrefix) || p === path) return false;
      const relativePath = p.slice(parentPrefix.length);
      return !relativePath.includes('/') && (!filesOnly || get().fileDirectory[p].type === 'file');
    });
  },
}));

export default useFsStore;
