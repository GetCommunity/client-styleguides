import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'pacificcommunities-primary': ['Roboto', 'sans-serif'],
  'pacificcommunities-secondary': ['"IBM Plex Serif"', 'serif'],
};

const colors = {
  'pacificcommunities-primary-blue-light': '#043E70',
  'pacificcommunities-primary-blue-dark': '#021E46',
  'pacificcommunities-primary-gray': '#54595F',
  'pacificcommunities-secondary-yellow': '#F7DF4B',
  'pacificcommunities-secondary-green': '#009639',
  'pacificcommunities-secondary-magenta': '#9AACA0',
  'pacificcommunities-secondary-red': '#FFB81C',
  'pacificcommunities-secondary-orange': '#FF9A32',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
