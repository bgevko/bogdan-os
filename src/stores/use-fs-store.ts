import equal from 'fast-deep-equal';
import { create } from 'zustand';

import fileDirectory from '@/globals/file-directory';
import { FileSystem, GridState } from '@/types/file-system';
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
  selected: string[];

  setFileSystem: (fs: FileSystem) => void;

  setCurrentPath: (path: string) => void;

  getCurrentDirectory: () => string;
  getParentDirectory: (path: string) => string;

  loadDirectory: (path: string) => string[];

  getChildren: (path: string, options?: { filesOnly: boolean }) => string[];

  getDirectoryGrid: (path: string) => GridState;
  setDirectoryGrid: (path: string, grid: GridState) => void;

  getParentGridItemsPerLine: (path: string) => number;

  getItemPosition: (path: string) => Position;
  setItemPosition: (path: string, position: Position) => void;

  getItemGridIndex: (path: string) => number;
  setItemGridIndex: (path: string, index: number) => void;

  getSelected: () => string[];
  setSelected: (paths: string[]) => void;
  addSelected: (path: string) => void;
  removeSelected: (path: string) => void;
}

const useFsStore = create<FileSystemState>((set, get) => ({
  fileDirectory,
  currentPath: '/',
  selected: [],
  setFileSystem: (fs) => {
    set({ fileDirectory: fs });
  },
  setCurrentPath: (path) => {
    validatePath(get().fileDirectory, path);
    validateDirectory(get().fileDirectory, path);
    set({ currentPath: path });
  },
  getCurrentDirectory: () => get().currentPath,
  getParentDirectory: (path) => {
    validatePath(get().fileDirectory, path);
    if (path === '/') return '/';
    const parentPath = path.split('/').slice(0, -1).join('/');
    return parentPath === '' ? '/' : parentPath;
  },

  loadDirectory: (path) => {
    validatePath(get().fileDirectory, path);
    validateDirectory(get().fileDirectory, path);

    const fs = { ...get().fileDirectory };
    const children = get().getChildren(path);
    const gridIndeces = new Set<number>();

    function getNextIndex(currentIndex: number): number {
      let index = currentIndex;
      while (gridIndeces.has(index)) {
        index += 1;
      }
      return index;
    }
    // Assign grid indeces to children if not already assigned
    let nextAvailableIndex = 0;
    for (const child of children) {
      const item = fs[child];
      if (item.gridIndex === undefined || gridIndeces.has(item.gridIndex)) {
        item.gridIndex = getNextIndex(nextAvailableIndex);
        nextAvailableIndex += 1;
      } else {
        gridIndeces.add(item.gridIndex);
      }
    }
    if (!equal(fs, get().fileDirectory)) {
      set({ fileDirectory: fs });
    }
    return children;
  },

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
  getDirectoryGrid: (path) => {
    validatePath(get().fileDirectory, path);
    validateDirectory(get().fileDirectory, path);
    return get().fileDirectory[path].childGrid ?? { itemsPerLine: 0 };
  },
  setDirectoryGrid: (path, grid) => {
    validatePath(get().fileDirectory, path);
    validateDirectory(get().fileDirectory, path);
    set((state) => {
      const fs = { ...state.fileDirectory };
      fs[path].childGrid = grid;
      return { fileDirectory: fs };
    });
  },
  getParentGridItemsPerLine: (path) => {
    validatePath(get().fileDirectory, path);
    const parentPath = get().getParentDirectory(path);
    const parentGrid = get().getDirectoryGrid(parentPath);
    return parentGrid.itemsPerLine;
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
  getItemGridIndex: (path) => {
    validatePath(get().fileDirectory, path);
    return get().fileDirectory[path].gridIndex ?? 0;
  },
  setItemGridIndex: (path, index) => {
    validatePath(get().fileDirectory, path);
    set((state) => {
      const fs = { ...state.fileDirectory };
      fs[path].gridIndex = index;
      return { fileDirectory: fs };
    });
  },
  setSelected: (paths) => {
    set((state) => {
      const fs = { ...state.fileDirectory };
      for (const path of paths) {
        validatePath(fs, path);
      }
      return {
        selected: paths,
      };
    });
  },
  getSelected: () => {
    return get().selected;
  },
  addSelected: (path) => {
    set((state) => {
      const fs = { ...state.fileDirectory };
      const newSelected = new Set(state.selected);
      validatePath(fs, path);
      newSelected.add(path);
      return {
        selected: [...newSelected],
      };
    });
  },
  removeSelected: (path) => {
    set((state) => {
      const fs = { ...state.fileDirectory };
      const newSelected = new Set(state.selected);
      validatePath(fs, path);
      newSelected.delete(path);
      return {
        selected: [...newSelected],
      };
    });
  },
}));

export default useFsStore;
