import { Position } from '@/types/units';

export interface FileSystemEntry {
  name: string;
  type: 'file' | 'directory';
  position?: Position;
  isSelected?: boolean;
}

export type FileSystem = Record<string, FileSystemEntry>;
