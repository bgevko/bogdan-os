import { theme } from './curiosities';

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

export const currentTheme: Theme = theme;
