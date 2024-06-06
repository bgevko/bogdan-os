import { type ComponentType, LazyExoticComponent } from 'react';

import { type Size, Position, Dimensions } from '@/types/units';

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
  tabDimensions?: Dimensions;
  opacity?: number;
}

export type Processes = Record<string, Process>;
