import { DefaultApp } from '@/constants';
import { type LazyAppComponent, Size, Position, Window } from '@/types';
import { parseFileInfo } from '@/utils/fs';

export interface ProcessOptions {
  hasWindow?: boolean;
  defaultWindow?: Window;
  position?: Position;
  minSize?: Size;
  size?: Size;
  fileName?: string;
  fileExt?: string;
}

// extend ComponentType to include rootPath
export class ProcessNode {
  // Common to all
  path: string;

  fileName: string;

  fileExt: string;

  Component: LazyAppComponent;

  icon: string;

  // Window related
  hasWindow: boolean;

  minSize: Size;

  size: Size;

  position: Position;

  defaultWindow: Window;

  isMaximized: boolean;

  isMinimized: boolean;

  maximizedWindow: Window;

  unMaximizedWindow: Window;

  minimizedWindow: Window;

  unMinimizedWindow: Window;

  // Other
  isAnimating: boolean;

  isUpdatingSize: boolean;

  opacity: number;

  constructor(path: string, options: ProcessOptions = {}) {
    const { fileName, fileExt, icon, component } = parseFileInfo(path);
    const zeroDimensions = { size: { width: 0, height: 0 }, position: { x: 0, y: 0 } };
    this.path = path;
    this.fileName = fileName;
    this.fileExt = fileExt;
    this.Component = component ?? DefaultApp;
    this.icon = icon;
    this.hasWindow = options.hasWindow ?? true;
    this.defaultWindow = options.defaultWindow ?? {
      size: { width: 400, height: 400 },
      position: { x: 300, y: 300 },
    };
    this.minSize = options.minSize ?? { width: 300, height: 300 };
    this.size = options.size ?? { width: 400, height: 400 };
    this.position = options.position ?? { x: 300, y: 300 };
    this.isMaximized = false;
    this.isMinimized = false;
    this.maximizedWindow = { ...zeroDimensions };
    this.unMaximizedWindow = { ...zeroDimensions };
    this.minimizedWindow = { ...zeroDimensions };
    this.unMinimizedWindow = { ...zeroDimensions };
    this.isAnimating = false;
    this.isUpdatingSize = false;
    this.opacity = 1;
  }

  dumpOptions(): ProcessOptions {
    return {
      hasWindow: this.hasWindow,
      defaultWindow: this.defaultWindow,
      position: this.position,
      minSize: this.minSize,
      size: this.size,
      fileName: this.fileName,
      fileExt: this.fileExt,
    };
  }
}
