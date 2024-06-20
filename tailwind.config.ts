import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './index.html',
    './lib/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  daisyui: {
    themes: [{
      'emerald': {
        ...require("daisyui/src/theming/themes")["emerald"],
        "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.25rem",
      }
    }]
  },
  plugins: [daisyui],
};

export default config;
