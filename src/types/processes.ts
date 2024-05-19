import { type ComponentType, LazyExoticComponent } from 'react';

export interface Process {
  title: string;
  icon: string;
  Component: LazyExoticComponent<ComponentType>;
  hasWindow: boolean;
}

export type Processes = Record<string, Process>;
