module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderSpacing: {
        13: '0 10px',
      },
      fontFamily: {
        display: ['DM Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
