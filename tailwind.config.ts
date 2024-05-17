import { type Config } from 'tailwindcss';

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
