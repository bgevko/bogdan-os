import { type ComponentType, LazyExoticComponent } from 'react';

import { type Size, Position } from '@/types/units';

export interface Process {
  Component: LazyExoticComponent<ComponentType>;
  title: string;
  icon: string;
  hasWindow: boolean;
  minSize: Size;
  maximized: boolean;
  size: Size;
  position: Position;
  isAnimating: boolean;
  isMinimized: boolean;
}

export type Processes = Record<string, Process>;
