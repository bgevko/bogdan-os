import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ClassNameValue = string | null | undefined | 0 | 0n | false;

export function cn(...inputs: ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}
