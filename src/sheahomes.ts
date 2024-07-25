import plugin from 'tailwindcss/plugin';

const fontFamily = {
  'sheahomes-primary': ['Gotham', 'sans-serif'],
};

const colors = {
  'sheahomes-primary-blue': '#41748D',
  'sheahomes-primary-khaki': '#ACA39A',
  'sheahomes-primary-gray': '#97999B',
  'sheahomes-secondary-gray-dark': '#3F4444',
  'sheahomes-secondary-teal': '#00AEC7',
  'sheahomes-secondary-green': '#009639',
  'sheahomes-secondary-olive': '#92ACA0',
  'sheahomes-secondary-yellow': '#FFB81C',
  'sheahomes-secondary-orange': '#FF9A32',
  'sheahomes-secondary-gray-light': '#D9E1E2',
};

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
});
