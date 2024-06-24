/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ICON_SIZE } from '@/components/system/fs/fs-icon';
import defaultDir, { type FileNodeData } from '@/globals/starting-directory';
import { type GridStack } from '@/types/file-system';
import { type Position, Window } from '@/types/units';

const selectionIntersectsElement = (selection: Window, element: Position): boolean => {
  if (
    element.x + ICON_SIZE + 20 < selection.position.x ||
    element.y + ICON_SIZE + 20 < selection.position.y ||
    element.x > selection.position.x + selection.size.width - 14 ||
    element.y > selection.position.y + selection.size.height - 14
  ) {
    return false;
  }
  return true;
};

export default selectionIntersectsElement;

export const splitPath = (path: string): string[] => ['/', ...path.split('/').filter(Boolean)];

export interface FileOptions {
  path?: string;
  isDirectory?: boolean;
  position?: Position;
  gridIndex?: number;
}

export class FileNode {
  path: string;

  isDirectory: boolean;

  gridIndex: number;

  gridStack: GridStack;

  // eslint-disable-next-line no-use-before-define
  children: Map<string, FileNode>;

  constructor({ isDirectory, path, gridIndex }: FileOptions = {}) {
    this.path = path ?? '';
    this.isDirectory = isDirectory ?? true;
    this.gridIndex = gridIndex ?? 0;
    this.gridStack = { itemsPerLine: 0 };
    this.children = new Map<string, FileNode>();
  }

  get hasChildren(): boolean {
    return this.children.size > 0;
  }

  addChild(pathComponent: string, options: FileOptions = {}): void {
    // Create a set of all children grid indices
    const gridIndices = new Set<number>();
    for (const child of this.children.values()) {
      gridIndices.add(child.gridIndex);
    }

    // Find the first unused grid index
    let gridIndex = 0;
    while (gridIndices.has(gridIndex)) {
      gridIndex += 1;
    }

    // Set grid index options for the new child
    const childOptions = { gridIndex, ...options };
    this.children.set(pathComponent, new FileNode(childOptions));
  }
}

export class FileSystemTrie {
  root: FileNode;

  allPaths: Set<string>;

  constructor(directoryData: FileNodeData = defaultDir) {
    this.root = new FileNode();
    this.root.addChild('/');
    this.root.path = '/';
    this.allPaths = new Set<string>();
    this.allPaths.add('/');
    this.loadFrom(directoryData);
  }

  traverse(path: string): FileNode {
    let curr = this.root;
    const components = splitPath(path);
    for (const component of components.slice(1)) {
      if (!curr.children.has(component)) {
        throw new Error(`No such file or directory: ${path}`);
      }
      curr = curr.children.get(component)!;
    }
    return curr;
  }

  forgePath(path: string): FileNode {
    const components = splitPath(path);
    let curr = this.root;
    let subpath = '';
    for (const component of components.slice(1)) {
      subpath += `/${component}`;
      if (!curr.children.has(component)) {
        this.addChildNode(subpath);
      }
      curr = curr.children.get(component)!;
    }
    return curr;
  }

  addChildNode(finalPath: string, options: FileOptions = {}): void {
    let parentPath = finalPath.split('/').slice(0, -1).join('/');
    parentPath = parentPath === '' ? '/' : parentPath;
    this.validatePath(parentPath);
    const parent = this.traverse(parentPath);
    const childComponent = finalPath.split('/').at(-1);
    parent.addChild(childComponent!, { path: finalPath, ...options });
    this.allPaths.add(finalPath);
  }

  mkdir(path: string): void {
    if (!this.allPaths.has(path)) {
      this.addChildNode(path, { isDirectory: true });
    }
  }

  getChildren(path: string): FileNode[] {
    const childrenMap = this.traverse(path).children;
    for (const [component, child] of childrenMap) {
      if (child.path === '') {
        child.path = `${path}/${component}`;
      }
    }
    return [...childrenMap.values()];
  }

  getGridStack(path: string): GridStack {
    return this.traverse(path).gridStack;
  }

  setGridStack(path: string, grid: GridStack): void {
    this.traverse(path).gridStack = grid;
  }

  getGridIndex(path: string): number {
    return this.traverse(path).gridIndex;
  }

  setGridIndex(path: string, index: number): void {
    this.traverse(path).gridIndex = index;
  }

  isDirectory(path: string): boolean {
    return this.traverse(path).isDirectory;
  }

  isValidPath(path: string): boolean {
    return this.allPaths.has(path);
  }

  validatePath(path: string): void {
    if (!this.isValidPath(path)) {
      throw new Error(`No such file or directory: ${path}`);
    }
  }

  validateDirectory(path: string): void {
    if (!this.isDirectory(path)) {
      throw new Error(`Not a directory: ${path}`);
    }
  }

  validatePathAndDirectory(path: string): void {
    this.validatePath(path);
    this.validateDirectory(path);
  }

  loadFrom(data: FileNodeData): void {
    const queue: FileNodeData[] = [data];

    while (queue.length > 0) {
      const node = queue.shift()!;
      const { path, children } = node;

      if (children) {
        // It's a directory, create it and add its children to the queue
        this.mkdir(path);
        for (const child of children) {
          queue.push(child);
        }
      } else {
        // It's a file, add it as a child node
        this.addChildNode(path, { isDirectory: false });
      }
    }
  }
}
