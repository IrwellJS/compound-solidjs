import type { Config } from 'tailwindcss';
import {theme} from './theme.config';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  daisyui: {
    themes: ['emerald']
  },
  theme: {
    extend: theme,
  },
  plugins: [daisyui],
};

export default config;
