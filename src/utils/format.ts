import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ClassNameValue = string | null | undefined | 0 | 0n | false;

interface FileInfo {
  fileName: string;
  fileExt: string;
}

export function parseFileInfo(filePath: string): FileInfo {
  const match = filePath.match(/([^/\\]+)(\.[^/\\]+)?$/);

  if (match) {
    const fullFileName = match[1];
    // split the above at the dot if it exists, otherwise default to 'test'
    const nameParts = fullFileName.split('.');
    const fileExt = nameParts.length > 1 ? nameParts.pop() : 'test';
    const fileName = nameParts[0];
    return { fileName, fileExt: fileExt ?? 'test' };
  }

  // If no match is found, return empty strings
  return { fileName: '', fileExt: '' };
}

export function parseFileInfos(filePaths: string[]): FileInfo[] {
  return filePaths.map((path) => parseFileInfo(path));
}

export default function cn(...inputs: ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}
