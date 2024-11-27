import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ClassNameValue = string | null | undefined | 0 | 0n | false;

export default function cn(...inputs: ClassNameValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Converts seconds into formatted time string (h:mm:ss)
 * @param totalSeconds - Number of elapsed seconds
 * @returns String, formatted as "h:mm:ss"
 */
export function formatTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600).toString();
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${hours}:${paddedMinutes}:${paddedSeconds}`;
}
