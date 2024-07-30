import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'tollbrothers-primary': ['"DM Serif Display"', 'serif'],
  'tollbrothers-secondary': ['Gotham', 'sans-serif'],
};

const colors = {
  'tollbrothers-primary-blue-dark': '#0C2240',
  'tollbrothers-primary-white': '#FFFFFF',
  'tollbrothers-primary-tan': '#E5E1DB',
  'tollbrothers-primary-blue-light': '#004876',
  'tollbrothers-accent-blue': '#0070CC',
  'tollbrothers-accent-tan': '#696056',
  'tollbrothers-accent-magenta': '#A31F34',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
