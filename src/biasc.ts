import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'biasc-primary': ['"Proxima Nova"', 'sans-serif'],
  'biasc-secondary': ['Oswald', 'serif'],
};

const colors = {
  'biasc-blue': '#003C7C',
  'biasc-gray': '#BAD40F',
  'biasc-gold': '#F6A81C',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
