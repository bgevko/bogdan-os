import { type ComponentType, LazyExoticComponent } from 'react';

export interface Process {
  Component: LazyExoticComponent<ComponentType>;
  hasWindow: boolean;
}

export type Processes = Record<string, Process>;
