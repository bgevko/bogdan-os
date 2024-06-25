import { type ComponentType, LazyExoticComponent } from 'react';

interface AppComponent {
  rootPath: string;
}

export type LazyAppComponent = LazyExoticComponent<ComponentType<AppComponent>>;

export interface ProcessComponent {
  component: LazyAppComponent;
  icon: string;
}

export type ProcessComponents = Map<string, ProcessComponent>;
