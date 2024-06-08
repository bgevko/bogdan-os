import { type ComponentType, LazyExoticComponent } from 'react';

import { type Size, Position, Dimensions } from '@/types/units';

export interface WindowState {
  hasWindow: boolean;
  position: Position;
  size: Size;
  minSize: Size;
  defaultDimensions: Dimensions;
  maximized: boolean;
  maximizedDimensions: Dimensions;
  unmaximizedDimensions: Dimensions;
  minimized: boolean;
  minimizedDimensions: Dimensions;
  unminimizedDimensions: Dimensions;
  isAnimating: boolean;
  opacity: number;
}

export interface ProcessComponent {
  Component: LazyExoticComponent<ComponentType>;
  title: string;
  icon: string;
}

export type Process = ProcessComponent & WindowState;

export type Processes = Record<string, Process>;
export type ProcessComponents = Record<string, ProcessComponent>;
