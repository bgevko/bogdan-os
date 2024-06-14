import { Position } from '@/types/units';

export interface GridState {
  columns: number;
  rows: number;
}

export interface FileSystemEntry {
  name: string;
  type: 'file' | 'directory';
  position?: Position;
  gridIndex?: number;
  isSelected?: boolean;
  childGrid?: GridState;
}

export type FileSystem = Record<string, FileSystemEntry>;
