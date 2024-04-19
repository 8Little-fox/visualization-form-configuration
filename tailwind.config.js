module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './common/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        120: '30rem',
      },
      colors: {
        palette: {
          light: '#dbeafe',
          lighter: '#eff6ff',
        },
        gray: {
          150: '#999999',
          250: '#e5ebf0',
          650: '#404040',
          750: '#f5f5f5',
        },
        red: {
          450: '#DA5860',
        },
      },
      opacity: ['disabled'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
