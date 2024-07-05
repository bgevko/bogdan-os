/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import {
  initDirHelper,
  mkdirHelper,
  touchHelper,
  rmHelper,
  mvHelper,
} from '@/stores/use-fs-store/fs-helpers';
import { type Paths, FileNode, FileSystem, FileRemoveOptions, FileNodeOptions } from '@/types';
import { splitPath, normalizePath } from '@/utils/fs';

enableMapSet();

interface FileSystemActions {
  // Getters and setters
  getNode(path: string): FileNode;
  getPaths: () => Set<string>;
  getChildren: (path: string) => FileNode[];
  getChildPaths: (path: string) => string[];
  getChildrenCount: (path: string) => number;

  // File operations
  initDir: (sourcePath?: Paths) => void;
  getDir: () => Map<string, FileNode>;
  mkdir: (path: string) => void;
  touch: (path: string) => void;
  rm: (path: string, options?: FileRemoveOptions) => void;
  mv: (sourcePath: string, targetPath: string, options?: FileNodeOptions) => void;

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
    dir: initDirHelper(),

    // Getters and setters
    getNode: (path: string) => {
      path = normalizePath(path);
      get().validatePath(path);
      return get().dir.get(path)!;
    },
    getPaths: () => {
      return new Set(get().dir.keys());
    },
    getChildren: (path: string) => {
      path = normalizePath(path);
      const node = get().getNode(path);
      return [...node.children.values()];
    },
    getChildPaths: (path: string) => {
      path = normalizePath(path);
      return get()
        .getChildren(path)
        .map((child) => child.path);
    },
    getChildrenCount: (path: string) => {
      path = normalizePath(path);
      try {
        return get().getNode(path).children.size;
      } catch {
        return 0;
      }
    },

    // File operations
    initDir: (sourcePath?: Paths) => {
      if (!sourcePath) sourcePath = ['/'];
      set((state) => {
        state.dir = initDirHelper(sourcePath);
      });
    },
    getDir: () => {
      return get().dir;
    },
    touch: (path) => {
      set((state) => {
        state.dir = touchHelper(state.dir, path);
      });
    },
    mkdir: (path) => {
      set((state) => {
        state.dir = mkdirHelper(state.dir, path);
      });
    },

    rm: (path: string, options?: FileRemoveOptions) => {
      set((state) => {
        state.dir = rmHelper(state.dir, path, options);
      });
    },

    mv: (sourcePath: string, targetPath: string, options?: FileNodeOptions) => {
      set((state) => {
        state.dir = mvHelper(state.dir, sourcePath, targetPath, options);
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
