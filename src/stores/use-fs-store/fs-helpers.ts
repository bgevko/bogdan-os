/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { iconsPath, startingDir } from '@/constants';
import useGridStore from '@/stores/use-grid-store';
import useProcessesStore from '@/stores/use-processes-store';
import { GRID_CELL_SIZE } from '@/themes';
import { Paths, FileNode, FileNodeOptions, DirectoryMap, FileRemoveOptions } from '@/types';
import { parseParentPath, normalizePath, parseFileIcon } from '@/utils/fs';

export function newFileNode(options: FileNodeOptions = {}): FileNode {
  const isDir = options.isDir ?? true;
  const folderIcon = isDir ? `${iconsPath}/folder.png` : '';
  const fileIcon = options.path ? parseFileIcon(options.path) : '';
  const icon = isDir ? folderIcon : fileIcon;
  return {
    path: options.path ?? '',
    icon,
    isDir,
    children: new Map<string, FileNode>(),
  };
}

export function newGrid(filePath: string, dir: FileNode): void {
  const { createGrid } = useGridStore.getState();
  createGrid(filePath, {
    cellSize: GRID_CELL_SIZE,
    childPaths: [...dir.children.keys()],
    flow: filePath === '/Desktop' ? 'row' : 'col',
  });
}

export function addToParentGrid(finalPath: string, index?: number): void {
  const { addItem } = useGridStore.getState();
  addItem(finalPath, index);
}

export function removeFromParentGrid(path: string): void {
  const { removeItem } = useGridStore.getState();
  removeItem(path);
}

export function deleteGrid(path: string): void {
  const { removeGrid } = useGridStore.getState();
  removeGrid(path);
}

export function getNextGridIndex(parentPath: string): number {
  return useGridStore.getState().getNextIndex(parentPath);
}

export function mkdirHelper(
  dir: DirectoryMap,
  path: string,
  options?: FileNodeOptions,
): DirectoryMap {
  path = normalizePath(path);
  const mkdir = (filePath: string): void => {
    if (filePath === '' || dir.has(filePath)) {
      return;
    }
    const parentPath = parseParentPath(filePath);
    mkdir(parentPath);

    const parent = dir.get(parentPath);
    if (parent?.isDir) {
      const newDir = newFileNode({ path: filePath, isDir: true });
      parent.children.set(filePath, newDir);
      dir.set(filePath, newDir);
      newGrid(filePath, newDir);
      addToParentGrid(filePath, options?.gridIndex);
    }
  };
  mkdir(path);
  return dir;
}

export function touchHelper(
  dir: DirectoryMap,
  path: string,
  options?: FileNodeOptions,
): DirectoryMap {
  if (path.endsWith('/')) {
    throw new Error(`Invalid path: ${path}. Use mkdir instead`);
  }
  path = normalizePath(path);
  if (dir.has(path)) {
    throw new Error(`File already exists: ${path}`);
  }
  const parentPath = parseParentPath(path);
  if (!dir.has(parentPath)) {
    mkdirHelper(dir, parentPath);
  } else if (!dir.get(parentPath)!.isDir) {
    throw new Error(`Parent path is a file: ${parentPath}`);
  }
  const newFile = newFileNode({ path, isDir: false });
  dir.get(parentPath)!.children.set(path, newFile);
  dir.set(path, newFile);
  addToParentGrid(path, options?.gridIndex);
  return dir;
}

export function initDirHelper(
  source: Paths = startingDir,
  initialDir: DirectoryMap = new Map([['/', newFileNode({ path: '/' })]]),
): DirectoryMap {
  // Reset all grids
  useGridStore.getState().reset();

  // Initialize the directory
  let dir = new Map(initialDir);

  for (const path of source) {
    const isDir = path.endsWith('/');
    if (isDir) {
      dir = mkdirHelper(dir, path);
    } else {
      try {
        dir = touchHelper(dir, path);
      } catch {
        // skip
      }
    }
  }
  return dir;
}

export function rmHelper(
  dir: DirectoryMap,
  path: string,
  options: FileRemoveOptions = {},
): DirectoryMap {
  path = normalizePath(path);
  if (path === '/') return dir;

  const opts: FileRemoveOptions = { filesOnly: false, emptyDirsOnly: false, ...options };
  if (opts.filesOnly && dir.get(path)?.isDir) {
    throw new Error(`${path} is a directory`);
  }
  if (opts.emptyDirsOnly && (dir.get(path)?.children.size ?? 0) > 0) {
    throw new Error(`${path} is not empty`);
  }

  const parentPath = parseParentPath(path);
  if (parentPath) {
    const parent = dir.get(parentPath)!;
    parent.children.delete(path);
    removeFromParentGrid(path);
  }

  for (const dirPath of dir.keys()) {
    if (dirPath.startsWith(path)) {
      dir.delete(dirPath);
    }
  }

  return dir;
}

export function mvHelper(
  dir: DirectoryMap,
  sourcePath: string,
  targetPath: string,
  options?: FileNodeOptions,
): DirectoryMap {
  sourcePath = normalizePath(sourcePath);
  targetPath = normalizePath(targetPath);

  validatePath(dir, sourcePath);
  const parentPath = parseParentPath(targetPath);

  if (useGridStore.getState().gridIndexExists(parentPath, options?.gridIndex)) {
    throw new Error(`Target index already exists: ${targetPath}`);
  }

  if (sourcePath === targetPath) {
    throw new Error('Source and target paths are the same');
  }
  if (dir.has(targetPath)) {
    throw new Error(`Target path already exists: ${targetPath}`);
  }

  // Replace the source path with the target path in all children
  const sourceDeepPaths = getChildPathsDeep(dir, sourcePath);
  const newPaths = [...sourceDeepPaths].map((path) => path.replace(sourcePath, targetPath));

  // Remove the source path
  const sourceNode = dir.get(sourcePath)!;
  dir = rmHelper(dir, sourcePath);

  // Add the new paths
  if (sourceNode.isDir) {
    dir = mkdirHelper(dir, targetPath, options);
    for (const path of newPaths) {
      dir = mkdirHelper(dir, path);
    }
  } else {
    dir = touchHelper(dir, targetPath, options);
  }

  // Move processes using the old path to the new path
  useProcessesStore.getState().mvProcessPath(sourcePath, targetPath);

  return dir;
}

function validatePath(dir: DirectoryMap, path: string): void {
  if (!dir.has(path)) {
    throw new Error(`Path does not exist: ${path}`);
  }
}

function getNode(dir: DirectoryMap, path: string): FileNode {
  validatePath(dir, path);
  return dir.get(path)!;
}

export function getChildPathsDeep(dir: DirectoryMap, path: string): string[] {
  path = normalizePath(path);
  const paths = new Set<string>();
  const helper = (filePath: string): void => {
    const node = getNode(dir, filePath);
    if (filePath !== path) paths.add(filePath);
    for (const child of node.children.values()) {
      helper(child.path);
    }
  };
  helper(path);
  return [...paths];
}
