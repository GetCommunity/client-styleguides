import plugin from 'tailwindcss/plugin.js';

const fontFamily = {
  'trumark-primary': ['Montserrat', 'sans-serif'],
  'trumark-secondary': ['Raleway', 'sans-serif'],
};

const colors = {
  'trumark-primary-blue': '#00515F',
  'trumark-primary-orange': '#EA7600',
  'trumark-primary-teal': '#00938F',
  'trumark-primary-white': '#FFFFFF',
  'trumark-secondary-gray-blue': '#557B85',
  'trumark-secondary-cream': '#EFEFF0',
  'trumark-secondary-yellow': '#E5C91A',
  'trumark-secondary-gray-dark': '#576670',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
