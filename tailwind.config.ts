import {
  ClientStylesBIASC,
  ClientStylesBrandywine,
  ClientStylesGetCommunity,
  ClientStylesOlsonhomes,
  ClientStylesPacificcommunities,
  ClientStylesSheahomes,
  ClientStylesSocialBrands,
  ClientStylesTollbrothers,
  ClientStylesTrumark,
  ClientStylesVandaele,
  ClientStylesWoodbridgePacificGroup,
} from '@getcommunity/client-styleguides';

export default {
  content: ['./dev/*.html', './dev/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ClientStylesBIASC,
    ClientStylesBrandywine,
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
