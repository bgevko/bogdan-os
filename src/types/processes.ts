import { type ComponentType, LazyExoticComponent } from 'react';

import { type Size } from '@/types/units';

export interface Process {
  title: string;
  icon: string;
  minSize: Size;
  Component: LazyExoticComponent<ComponentType>;
  hasWindow: boolean;
}

export type Processes = Record<string, Process>;
