import { type ComponentType, LazyExoticComponent } from 'react';

import { type Size, Position, Window } from '@/types/units';

export interface WindowState {
  hasWindow: boolean;
  position: Position;
  size: Size;
  minSize: Size;
  defaultWindow: Window;
  maximized: boolean;
  maximizedWindow: Window;
  unMaximizedWindow: Window;
  minimized: boolean;
  minimizedWindow: Window;
  unMinimizedWindow: Window;
  isAnimating: boolean;
  opacity: number;
}

export interface ProcessComponent {
  Component: LazyExoticComponent<ComponentType>;
  title: string;
  icon: string;
  minSize?: Size;
  defaultWindow?: Window;
}

export type Process = ProcessComponent & WindowState;

export type Processes = Record<string, Process>;
export type ProcessComponents = Record<string, ProcessComponent>;
