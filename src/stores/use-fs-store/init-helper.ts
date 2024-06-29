/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
import { iconsPath, startingDir } from '@/constants';
import { type Paths, FileNode, FileNodeOptions, DirectoryMap } from '@/types';
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
    gridIndex: options.gridIndex ?? 0,
    gridItemsPerLine: 0,
    children: new Map<string, FileNode>(),
  };
}

export class InitHelper {
  private dir: DirectoryMap = new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]);
  constructor() {
    this.initDir(startingDir);
  }

  initDir(source?: Paths): void {
    if (!source) {
      this.dir = new Map<string, FileNode>([['/', newFileNode({ path: '/' })]]);
      return;
    }
    for (const path of source) {
      const isDir = path.endsWith('/');
      if (isDir) {
        this.mkdir(path);
      } else {
        try {
          this.touch(path);
        } catch {
          // skip
        }
      }
    }
  }

  getDir(): DirectoryMap {
    return this.dir;
  }

  private mkdir(path: string): void {
    path = normalizePath(path);
    const { dir } = this;
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
      }
    };
    mkdirHelper(path);
  }

  private touch(path: string): void {
    if (path.endsWith('/')) {
      throw new Error(`Invalid path: ${path}. Use mkdir instead`);
    }
    path = normalizePath(path);
    if (this.dir.has(path)) {
      throw new Error(`File already exists: ${path}`);
    }
    const parentPath = parseParentPath(path);
    this.mkdir(parentPath);
    const gridIndex = this.dir.get(parentPath)!.children.size;
    const newFile = newFileNode({ path, isDir: false, gridIndex });
    this.dir.get(parentPath)!.children.set(path, newFile);
    this.dir.set(path, newFile);
  }
}
