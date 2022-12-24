module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: {
        content: '0px 10px 30px rgba(225, 229, 236, 0.5)',
      },
    },
  },
  plugins: [],
};
