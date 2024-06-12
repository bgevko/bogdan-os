export interface FileSystemEntry {
  name: string;
  type: 'file' | 'directory';
}

export type FileSystem = Record<string, FileSystemEntry>;
