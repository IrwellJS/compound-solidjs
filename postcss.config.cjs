module.exports = {
  purge: ['./lib/**/*.{ts,tsx}'],
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
