import { Position } from '@/types/units';

export interface GridStack {
  itemsPerLine: number;
}

export interface FileSystemEntry {
  // Deprecate
  name: string;
  type: 'file' | 'directory';
  position?: Position;
  gridIndex?: number;
  childGrid?: GridStack;
}

export interface TransferData {
  path: string;
  startingGridIndex: number;
  isHead: boolean;
}

export type FileSystem = Record<string, FileSystemEntry>;
