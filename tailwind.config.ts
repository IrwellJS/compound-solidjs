import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './index.html',
    './lib/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  daisyui: {
    themes: ['emerald']
  },
  plugins: [daisyui],
};

export default config;
