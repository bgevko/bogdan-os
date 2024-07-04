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
  getNextGridIndex,
  removeFromParentGrid,
} from '@/stores/use-fs-store/fs-helpers';
import useGridStore from '@/stores/use-grid-store';
import { type Paths, FileNode, FileSystem, FileRemoveOptions } from '@/types';
import { splitPath, parseParentPath, normalizePath } from '@/utils/fs';

enableMapSet();

interface FileSystemActions {
  // Getters and setters
  getNode(path: string): FileNode;
  getPaths: () => Set<string>;
  getChildren: (path: string) => FileNode[];
  getChildPaths: (path: string) => string[];
  getChildPathsDeep: (path: string) => string[];
  getChildrenCount: (path: string) => number;

  // File operations
  initDir: (sourcePath?: Paths) => void;
  mkdir: (path: string) => void;
  touch: (path: string) => void;
  rm: (path: string, options?: FileRemoveOptions) => void;
  mv: (sourcePath: string, targetPath: string) => void;

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
    getChildPathsDeep: (path: string) => {
      path = normalizePath(path);
      const paths = new Set<string>();
      const helper = (filePath: string): void => {
        const node = get().getNode(filePath);
        if (filePath !== path) paths.add(filePath);
        for (const child of node.children.values()) {
          helper(child.path);
        }
      };
      helper(path);
      return [...paths];
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
      set((state) => {
        state.dir = new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]);
      });
      useGridStore.getState().reset();
      if (!sourcePath) return;
      for (const path of sourcePath) {
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
    touch: (path) => {
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
        // const gridIndex = state.dir.get(parentPath)!.children.size;
        const gridIndex = getNextGridIndex(parentPath);
        const newFile = newFileNode({ path, isDir: false, gridIndex });
        state.dir.get(parentPath)!.children.set(path, newFile);
        state.dir.set(path, newFile);
        addToParentGrid(path);
      });
    },
    mkdir: (path) => {
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
            // const gridIndex = parent.children.size;
            const gridIndex = getNextGridIndex(parentPath);
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

    rm: (path: string, options?: FileRemoveOptions) => {
      path = normalizePath(path);
      if (path === '/') return;
      const opts: FileRemoveOptions = { filesOnly: false, emptyDirsOnly: false, ...options };
      if (opts.filesOnly && get().isDir(path)) {
        throw new Error(`${path} is a directory`);
      }
      if (opts.emptyDirsOnly && get().getChildrenCount(path) > 0) {
        throw new Error(`${path} is not empty`);
      }
      set((state) => {
        const parentPath = parseParentPath(path);
        if (parentPath) {
          const parent = state.dir.get(parentPath)!;
          parent.children.delete(path);
          removeFromParentGrid(path);
        }
        for (const dirPath of state.dir.keys()) {
          if (dirPath.startsWith(path)) {
            state.dir.delete(dirPath);
          }
        }
      });
    },

    mv: (sourcePath: string, targetPath: string) => {
      const { dir } = get();
      sourcePath = normalizePath(sourcePath);
      targetPath = normalizePath(targetPath);

      get().validatePath(sourcePath);

      if (sourcePath === targetPath) {
        throw new Error('Source and target paths are the same');
      }
      if (dir.has(targetPath)) {
        throw new Error(`Target path already exists: ${targetPath}`);
      }

      // Replace the source path with the target path in all children
      const sourceDeepPaths = get().getChildPathsDeep(sourcePath);
      const newPaths = sourceDeepPaths.map((path) => path.replace(sourcePath, targetPath));

      // Remove the source path
      const sourceNode = dir.get(sourcePath)!;
      get().rm(sourcePath);

      // NOTE: Once paths are associated with content, we need to update the content as well
      if (sourceNode.isDir) {
        get().mkdir(targetPath);
        for (const path of newPaths) {
          get().mkdir(path);
        }
      } else {
        get().touch(targetPath);
      }
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
