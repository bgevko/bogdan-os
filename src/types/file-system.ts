import { Position } from '@/types/units';

export interface GridState {
  itemsPerLine: number;
}

export interface FileSystemEntry {
  name: string;
  type: 'file' | 'directory';
  position?: Position;
  gridIndex?: number;
  childGrid?: GridState;
}

export interface TransferData {
  path: string;
  startingGridIndex: number;
  isHead: boolean;
}

export type FileSystem = Record<string, FileSystemEntry>;
