/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { iconsPath } from '@/constants';
import { type Paths, type Position } from '@/types';
import {
  splitPath,
  parseParentPath,
  normalizePath,
  parseFileInfo,
  parseFileName,
} from '@/utils/fs';

enableMapSet();

interface FileNodeOptions {
  path?: string;
  isDir?: boolean;
  position?: Position;
  gridIndex?: number;
}

interface FileNode {
  path: string;
  icon: string;
  isDir: boolean;
  gridIndex: number;
  gridItemsPerLine: number;
  children: Map<string, FileNode>;
}

type DirectoryMap = Map<string, FileNode>;

function newFileNode(options: FileNodeOptions = {}): FileNode {
  const isDir = options.isDir ?? true;
  const folderIcon = isDir ? `${iconsPath}/folder.png` : '';
  const fileIcon = options.path ? parseFileInfo(options.path).icon : '';
  const icon = isDir ? folderIcon : fileIcon;
  return {
    path: options.path ?? '',
    icon,
    isDir,
    gridIndex: options.gridIndex ?? 0,
    gridItemsPerLine: 0,
    children: new Map<string, FileNode>(),
  };
}

interface FileSystem {
  dir: DirectoryMap;
}

interface FileSystemActions {
  // Core operations
  initDir: (source?: Paths) => void;
  getNode(path: string): FileNode;
  getPaths: () => Set<string>;
  mkdir: (path: string) => void;
  touch: (path: string) => void;
  getChildren: (path: string) => FileNode[];

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
    dir: new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]),

    // Core operations
    initDir: (source?: Paths) => {
      if (!source) {
        set((state) => {
          state.dir = new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]);
        });
        return;
      }
      for (const path of source) {
        const isDir = path.endsWith('/');
        if (isDir) {
          get().mkdir(path);
        } else {
          get().touch(path);
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
          const name = parseFileName(filePath);
          const parentPath = parseParentPath(filePath) || '/';
          mkdirHelper(parentPath);

          const parent = dir.get(parentPath);
          if (parent?.isDir) {
            parent.children.set(name, newFileNode({ path: filePath }));
            dir.set(filePath, newFileNode({ path: filePath, isDir: true }));
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
      get().mkdir(path);
      set((state) => {
        const file = state.getNode(path);
        file.isDir = false;
        file.icon = parseFileInfo(path).icon;
      });
    },
    getChildren: (path: string) => {
      const node = get().getNode(path);
      return [...node.children.values()];
    },

    // Grid helpers
    getGridIndex: (path: string) => {
      return get().getNode(path).gridIndex;
    },
    setGridIndex: (path: string, gridIndex: number) => {
      set((state) => {
        const node = state.getNode(path);
        node.gridIndex = gridIndex;
      });
    },
    getGridItemsPerLine: (path: string) => {
      return get().getNode(path).gridItemsPerLine;
    },
    setGridItemsPerLine: (path: string, gridItemsPerLine: number) => {
      set((state) => {
        const node = state.getNode(path);
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
        throw new Error(`No such file or directory: ${path}`);
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
