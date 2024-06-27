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

export interface Window {
  size: Size;
  position: Position;
}

// File System
export interface TransferData {
  path: string;
  startingGridIndex: number;
  isHead: boolean;
}

export interface FileInfo {
  fileName: string;
  fileExt: string;
  icon: string;
  component?: LazyAppComponent;
}

export type Paths = string[];
