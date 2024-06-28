import { type ComponentType, LazyExoticComponent } from 'react';

// Components
interface AppComponent {
  rootPath: string;
}

export type LazyAppComponent = LazyExoticComponent<ComponentType<AppComponent>>;

export interface App {
  component: LazyAppComponent;
  icon: string;
}

export type AppDirectory = Map<string, App>;

// Units
export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface SizePos {
  size: Size;
  position: Position;
}

// File System
export interface TransferData {
  path: string;
  startingGridIndex: number;
  isHead: boolean;
}

// Processes
export interface WindowState {
  minSize: Size;
  size: Size;
  position: Position;
  defaultSizePos: SizePos;
  isMaximized: boolean;
  isMinimized: boolean;
  maximizedSizePos: SizePos;
  unMaximizedSizePos: SizePos;
  minimizedSizePos: SizePos;
  unMinimizedSizePos: SizePos;
  isAnimating: boolean;
  isUpdatingSize: boolean;
  opacity: number;
}

export interface ProcessNode {
  path: string;
  fileName: string;
  fileExt: string;
  icon: string;
  hasWindow: boolean;
  window: WindowState;
}

export type ResizeDirection =
  | 'NONE'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT';

// Other statics
export type Paths = string[];
