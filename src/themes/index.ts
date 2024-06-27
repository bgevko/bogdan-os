/* eslint-disable no-relative-import-paths/no-relative-import-paths */
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

export const TASKBAR_HEIGHT = 54;
export const WINDOW_HEADER_HEIGHT = 24;
export const ICON_SIZE = 70;
export const currentTheme: Theme = theme;
