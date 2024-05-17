import { type Config } from 'tailwindcss';

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { currentTheme as theme } from './themes/theme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
