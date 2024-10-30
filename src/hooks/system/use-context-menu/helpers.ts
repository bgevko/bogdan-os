import { MenuCallbackArgs } from '@/types';

export default function validateArgs(key: string, args?: MenuCallbackArgs): void {
  if (!args) {
    throw new Error('No arguments provided');
  }
  if (!Object.prototype.hasOwnProperty.call(args, key)) {
    throw new Error(`No ${key} provided`);
  }
}
