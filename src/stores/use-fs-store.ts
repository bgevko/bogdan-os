import { create } from 'zustand';

import fileDirectory from '@/globals/file-directory';
import { FileSystem } from '@/types/file-system';
import { Position } from '@/types/units';

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
  getItemPosition: (path: string) => Position;
  setItemPosition: (path: string, position: Position) => void;
  getIsSelected: (path: string) => boolean;
  setIsSelected: (path: string, selected: boolean) => void;
  getIsMultipleSelected: () => boolean;
  getAllSelected: () => string[];
  getSelectedBoundingBox: () => { left: number; top: number; right: number; bottom: number };
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
  getItemPosition: (path) => {
    validatePath(get().fileDirectory, path);
    return get().fileDirectory[path].position ?? { x: 0, y: 0 };
  },
  setItemPosition: (path, position) => {
    validatePath(get().fileDirectory, path);
    set((state) => {
      const fs = { ...state.fileDirectory };
      fs[path].position = position;
      return { fileDirectory: fs };
    });
  },
  getIsSelected: (path) => {
    validatePath(get().fileDirectory, path);
    return get().fileDirectory[path].isSelected ?? false;
  },
  setIsSelected: (path, selected) => {
    validatePath(get().fileDirectory, path);
    set((state) => {
      const fs = { ...state.fileDirectory };
      fs[path].isSelected = selected;
      return { fileDirectory: fs };
    });
  },
  getIsMultipleSelected: () => {
    const fs = get().fileDirectory;
    const selectedItems = Object.keys(fs).filter((path) => fs[path].isSelected);
    return selectedItems.length > 1;
  },
  getAllSelected: () => {
    const fs = get().fileDirectory;
    return Object.keys(fs).filter((path) => fs[path].isSelected);
  },
  getSelectedBoundingBox: () => {
    // Leftmost x, topmost y, rightmost x with width offset, bottommost y with height offset
    let leftmost = Infinity;
    let topmost = Infinity;
    let rightmost = -Infinity;
    let bottommost = -Infinity;
    for (const path of get().getAllSelected()) {
      const { x, y } = get().getItemPosition(path);
      leftmost = Math.min(leftmost, x);
      topmost = Math.min(topmost, y);
      rightmost = Math.max(rightmost, x + 70);
      bottommost = Math.max(bottommost, y + 70);
    }
    return { left: leftmost, top: topmost, right: rightmost, bottom: bottommost };
  },
}));

export default useFsStore;
