import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'tollbrothers-primary': ['"DM Serif Display"', 'serif'],
  'tollbrothers-secondary': ['Gotham', 'sans-serif'],
};

const colors = {
  'tollbrothers-primary-blue-dark': '#0C223F',
  'tollbrothers-primary-blue-light': '#004876',
  'tollbrothers-primary-white': '#FFFFFF',
  'tollbrothers-primary-tan': '#E5E1DB',
  'tollbrothers-accent-blue': '#0070CD',
  'tollbrothers-accent-tan': '#696057',
  'tollbrothers-accent-magenta': '#E5E1DB',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
