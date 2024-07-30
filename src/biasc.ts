import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'biasc-primary': ['"Proxima Nova"', 'sans-serif'],
  'biasc-secondary': ['Oswald', 'serif'],
};

const colors = {
  'biasc-blue': '#07506E',
  'biasc-gray': '#7F7F7F',
  'biasc-gold': '#CC9933',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
