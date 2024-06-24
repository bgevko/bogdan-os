import { create } from 'zustand';

import { type FileNodeData } from '@/globals/starting-directory';
import { type GridStack } from '@/types/file-system';
import { FileSystemTrie, type FileNode } from '@/utils/fs';

interface FileSystemState {
  root: FileSystemTrie;
  currentPath: string;
  selected: string[];

  initRootFromData: (data: FileNodeData) => void;

  setCurrentPath: (path: string) => void;

  getCurrentDir: () => string;
  getParentDir: (path: string) => string;

  getChildren: (path: string) => FileNode[];

  getGridStack: (path: string) => GridStack;
  setGridStack: (path: string, grid: GridStack) => void;

  getParentGridItemsPerLine: (path: string) => number; // Deprecate

  getGridIndex: (path: string) => number;
  setGridIndex: (path: string, index: number) => void;

  getSelected: () => string[];
  setSelected: (paths: string[]) => void;
  addSelected: (path: string) => void;
  removeSelected: (path: string) => void;
}

const useFsStore = create<FileSystemState>((set, get) => ({
  root: new FileSystemTrie(),
  initRootFromData: (data) => {
    get().root.loadFrom(data);
  },
  currentPath: '/',
  selected: [],
  setCurrentPath: (path) => {
    get().root.validatePath(path);
    get().root.validateDirectory(path);
    set({ currentPath: path });
  },
  getCurrentDir: () => get().currentPath,
  getParentDir: (path) => {
    get().root.validatePath(path);
    if (path === '/') return '/';
    const parentPath = path.split('/').slice(0, -1).join('/');
    return parentPath === '' ? '/' : parentPath;
  },
  getChildren: (path) => {
    return get().root.getChildren(path);
  },
  getGridStack: (path) => {
    return get().root.getGridStack(path);
  },
  setGridStack: (path, grid) => {
    const { root } = get();
    root.setGridStack(path, grid);
    set({ root });
  },
  getParentGridItemsPerLine: (path) => {
    const parentPath = get().getParentDir(path);
    const parentGrid = get().getGridStack(parentPath);
    return parentGrid.itemsPerLine;
  },
  getGridIndex: (path) => {
    return get().root.getGridIndex(path);
  },
  setGridIndex: (path, index) => {
    const { root } = get();
    root.setGridIndex(path, index);
    set({ root });
  },
  setSelected: (paths) => {
    set(() => {
      for (const path of paths) {
        get().root.validatePath(path);
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
      const newSelected = new Set(state.selected);
      get().root.validatePath(path);
      newSelected.add(path);
      return {
        selected: [...newSelected],
      };
    });
  },
  removeSelected: (path) => {
    set((state) => {
      const newSelected = new Set(state.selected);
      get().root.validatePath(path);
      newSelected.delete(path);
      return {
        selected: [...newSelected],
      };
    });
  },
}));

export default useFsStore;
