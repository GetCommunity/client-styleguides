import ClientStyleguideBiasc from "@getcommunity/client-styleguides/biasc"
import ClientStyleguideBrandywine from "@getcommunity/client-styleguides/brandywine"
import ClientStyleguideGetcommunity from "@getcommunity/client-styleguides/getcommunity"
import ClientStyleguideOlsonhomes from "@getcommunity/client-styleguides/olsonhomes"
import ClientStyleguidePacificcommunities from "@getcommunity/client-styleguides/pacificcommunities"
import ClientStyleguideSheahomes from "@getcommunity/client-styleguides/sheahomes"
import ClientStyleguideSocialBrands from "@getcommunity/client-styleguides/social-brands"
import ClientStyleguideTollbrothers from "@getcommunity/client-styleguides/tollbrothers"
import ClientStyleguideTrumark from "@getcommunity/client-styleguides/trumark"
import ClientStyleguideVandaele from "@getcommunity/client-styleguides/vandaele"
import ClientStyleguideWpg from "@getcommunity/client-styleguides/wpg"

export default {
  content: ["./dev/*.html", "./dev/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    ClientStyleguideBiasc,
    ClientStyleguideBrandywine,
    ClientStyleguideGetcommunity,
    ClientStyleguideOlsonhomes,
    ClientStyleguidePacificcommunities,
    ClientStyleguideSheahomes,
    ClientStyleguideSocialBrands,
    ClientStyleguideTollbrothers,
    ClientStyleguideTrumark,
    ClientStyleguideVandaele,
    ClientStyleguideWpg
  ]
}
