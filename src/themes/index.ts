/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { Position, Size, SizePos } from '@/types';

import theme from './retrotronic';

type Color = string | Record<string, string>;
export interface Theme {
  colors: {
    accent: Color;
    background: Color;
    error: Color;
    onBackground: Color;
    onError: Color;
    onPrimary: Color;
    onSecondary: Color;
    onSurface: Color;
    primary: Color;
    secondary: Color;
    surface: Color;
  };
}

export const TASKBAR_HEIGHT = 48;
export const WINDOW_HEADER_HEIGHT = 40;
export const ICON_SIZE = { width: 80, height: 88 };
export const MIN_WINDOW_SIZE: Size = { width: 400, height: 400 };
export const DEFAULT_WINDOW_SIZE: Size = { width: 400, height: 400 };
export const DEFAULT_WINDOW_POSITION: Position = { x: 300, y: 300 };
export const DEFAULT_WINDOW_SIZEPOS: SizePos = {
  size: DEFAULT_WINDOW_SIZE,
  position: DEFAULT_WINDOW_POSITION,
};
export const GRID_CELL_SIZE = 100;
export const currentTheme: Theme = theme;
