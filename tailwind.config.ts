import type { Config } from 'tailwindcss';
import {theme} from './theme.config';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: theme,
  },
  plugins: [],
};

export default config;
