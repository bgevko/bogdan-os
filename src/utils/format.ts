import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ClassNameValue = string | null | undefined | 0 | 0n | false;

export function parseFileName(filePath: string): string {
  return filePath.split('/').pop() ?? '';
}

export function parseFileNames(filePaths: string[]): string[] {
  return filePaths.map((path) => parseFileName(path));
}

export default function cn(...inputs: ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}
