import { type ComponentType, LazyExoticComponent } from 'react';

// Components
interface AppComponent {
  rootPath: string;
}

export type LazyAppComponent = LazyExoticComponent<ComponentType<AppComponent>>;

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
  isHead: boolean;
  startingGridIndex: number;
}

export type FileSystemContext = 'desktop' | 'folder';

export interface FileNode {
  path: string;
  isDir: boolean;
  children: Map<string, FileNode>;
}

export type DirectoryMap = Map<string, FileNode>;

export interface FileSystem {
  dir: DirectoryMap;
}

export interface FileNodeOptions {
  path?: string;
  isDir?: boolean;
  position?: Position;
  gridIndex?: number;
}

export interface FileRemoveOptions {
  filesOnly?: boolean;
  emptyDirsOnly?: boolean;
}

export interface GridOptions {
  cellSize: number;
  flow: 'row' | 'col';
  childPaths: string[];
}

export interface GridState {
  columns: number;
  rows: number;
  flow: 'row' | 'col';
  lineSize: number;
  items: Map<string, number>;
}

// Processes
export interface WindowState {
  minSize: Size;
  size: Size;
  position: Position;
  defaultSizePos: SizePos;
  isMaximized: boolean;
  isMinimized: boolean;
  disableResize: boolean;
  maximizedSizePos: SizePos;
  unMaximizedSizePos: SizePos;
  minimizedSizePos: SizePos;
  unMinimizedSizePos: SizePos;
  isAnimating: boolean;
  isUpdatingSize: boolean;
  isUpdatingPosition: boolean;
  opacity: number;
}

export interface ProcessState {
  path: string;
  hasWindow: boolean;
  window: WindowState;
}

export interface InitialProcessConfig {
  iconName: string;
  iconColor?: string; // wil be a hex string
  fileName: string;
  fileExt: string;
  hasWindow: boolean;
  disableDelete: boolean;
  component: LazyAppComponent;

  // Initial Window State
  size: Size;
}

export type AppOptions = Map<string, InitialProcessConfig>;

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

// Menu Context
export type MouseContext =
  | 'desktop'
  | 'file-icon'
  | 'taskbar'
  | 'taskbar-entry'
  | 'none'
  | 'folder';
export type MenuContext =
  | 'desktop'
  | 'file-icon'
  | 'folder'
  | 'taskbar'
  | 'taskbar-entry'
  | 'window'
  | 'window-header';
export interface MenuCallbackArgs {
  path?: string;
}
export type ContextMenuItem = () => void;
export type ContextMenuItems = Map<string, ContextMenuItem>;
export type ContextCallback = () => ContextMenuItems;
export type ContextCallbacks = Map<MenuContext, ContextCallback>;

// Other statics
export type Paths = string[];
