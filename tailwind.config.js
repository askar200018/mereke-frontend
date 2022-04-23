module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006255',
        background: '#F5F5F7',
        'grey-text': '#828282',
        'black-text': '#282828',
      },
      fontSize: {
        overline: '0.625rem',
        headline3: '2rem',
        headline4: '1.75rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
    },
  },
  plugins: [],
};
