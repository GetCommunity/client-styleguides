const {
  ClientStylesBIASC,
  ClientStyles,
  ClientStylesGetCommunity,
  ClientStylesOlsonhomes,
  ClientStylesPacificcommunities,
  ClientStylesSheahomes,
  ClientStylesSocialBrands,
  ClientStylesTollbrothers,
  ClientStylesTrumark,
  ClientStylesVandaele,
  ClientStylesWoodbridgePacificGroup,
} = require('@getcommunity/client-styleguides');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./dev/*.html', './dev/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ClientStylesBIASC,
    ClientStyles,
    ClientStylesGetCommunity,
    ClientStylesOlsonhomes,
    ClientStylesPacificcommunities,
    ClientStylesSheahomes,
    ClientStylesSocialBrands,
    ClientStylesTollbrothers,
    ClientStylesTrumark,
    ClientStylesVandaele,
    ClientStylesWoodbridgePacificGroup,
  ],
};
