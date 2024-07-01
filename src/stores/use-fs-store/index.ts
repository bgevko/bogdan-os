/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import {
  newGrid,
  addToParentGrid,
  newFileNode,
  InitHelper,
} from '@/stores/use-fs-store/init-helper';
import useGridStore from '@/stores/use-grid-store';
import { type Paths, FileNode, FileSystem } from '@/types';
import { splitPath, parseParentPath, normalizePath } from '@/utils/fs';

enableMapSet();

interface FileSystemActions {
  // Core operations
  initDir: (source?: Paths) => void;
  getNode(path: string): FileNode;
  getPaths: () => Set<string>;
  mkdir: (path: string) => void;
  touch: (path: string) => void;
  getChildren: (path: string) => FileNode[];
  getChildPaths: (path: string) => string[];
  getChildrenCount: (path: string) => number;

  // Grid helpers
  getGridIndex: (path: string) => number;
  setGridIndex: (path: string, gridIndex: number) => void;
  getGridItemsPerLine: (path: string) => number;
  setGridItemsPerLine: (path: string, gridItemsPerLine: number) => void;

  // Validation helpers
  isDir: (path: string) => boolean;
  hasPath: (path: string) => boolean;
  hasPathDeep: (path: string) => boolean;
  validatePath: (path: string) => void;
  validateDir: (path: string) => void;
  validatePathAndDir: (path: string) => void;
}

// Updated the store creator with correct typing for middleware
const useFsStore = create<FileSystem & FileSystemActions>()(
  immer((set, get) => ({
    dir: new InitHelper().getDir(),

    // Core operations
    initDir: (source?: Paths) => {
      set((state) => {
        state.dir = new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]);
      });
      useGridStore.getState().reset();
      if (!source) return;
      for (const path of source) {
        const isDir = path.endsWith('/');
        if (isDir) {
          get().mkdir(path);
        } else {
          try {
            get().touch(path);
          } catch {
            // skip
          }
        }
      }
    },
    getNode: (path: string) => {
      get().validatePath(path);
      return get().dir.get(path)!;
    },
    getPaths: () => {
      return new Set(get().dir.keys());
    },
    mkdir: (path: string) => {
      path = normalizePath(path);
      set((state) => {
        const { dir } = state;
        const mkdirHelper = (filePath: string): void => {
          if (filePath === '' || dir.has(filePath)) {
            return;
          }
          const parentPath = parseParentPath(filePath);
          mkdirHelper(parentPath);

          const parent = dir.get(parentPath);
          if (parent?.isDir) {
            const gridIndex = parent.children.size;
            const newDir = newFileNode({ path: filePath, isDir: true, gridIndex });
            parent.children.set(filePath, newDir);
            dir.set(filePath, newDir);

            // Set the grid
            newGrid(filePath, newDir);
            addToParentGrid(filePath);
          }
        };
        mkdirHelper(path);
      });
    },
    touch: (path: string) => {
      if (path.endsWith('/')) {
        throw new Error(`Invalid path: ${path}. Use mkdir instead`);
      }
      path = normalizePath(path);
      if (get().dir.has(path)) {
        throw new Error(`File already exists: ${path}`);
      }
      const parentPath = parseParentPath(path);
      get().mkdir(parentPath);
      set((state) => {
        const gridIndex = state.dir.get(parentPath)!.children.size;
        const newFile = newFileNode({ path, isDir: false, gridIndex });
        state.dir.get(parentPath)!.children.set(path, newFile);
        state.dir.set(path, newFile);
        addToParentGrid(path);
      });
    },
    getChildren: (path: string) => {
      const node = get().getNode(path);
      return [...node.children.values()];
    },
    getChildPaths: (path: string) => {
      return get()
        .getChildren(path)
        .map((child) => child.path);
    },
    getChildrenCount: (path: string) => {
      try {
        return get().getNode(path).children.size;
      } catch {
        return 0;
      }
    },

    // Grid helpers
    getGridIndex: (path: string) => {
      return get().getNode(path).gridIndex;
    },
    setGridIndex: (path: string, gridIndex: number) => {
      set((state) => {
        get().validatePath(path);
        const node = state.dir.get(path)!;
        node.gridIndex = gridIndex;
      });
    },
    getGridItemsPerLine: (path: string) => {
      return get().getNode(path).gridItemsPerLine;
    },
    setGridItemsPerLine: (path: string, gridItemsPerLine: number) => {
      set((state) => {
        get().validatePath(path);
        const node = state.dir.get(path)!;
        node.gridItemsPerLine = gridItemsPerLine;
      });
    },

    // Validation helpers
    isDir: (path: string) => {
      return get().getNode(path).isDir;
    },
    hasPath: (path: string) => {
      return get().dir.has(path);
    },
    hasPathDeep: (path: string) => {
      let subpath = '';
      for (const component of splitPath(path)) {
        subpath += `/${component}`;
        if (!get().hasPath(subpath)) {
          return false;
        }
      }
      return true;
    },
    validatePath: (path: string) => {
      if (!get().hasPath(path)) {
        throw new Error(
          `No such file or directory: ${path}\n Current directories: ${[...get().getPaths()].toString()}`,
        );
      }
    },
    validateDir: (path: string) => {
      const node = get().dir.get(path);
      if (!node?.isDir) {
        throw new Error(`Not a directory: ${path}`);
      }
    },
    validatePathAndDir: (path: string) => {
      get().validatePath(path);
      get().validateDir(path);
    },
  })),
);

export default useFsStore;
