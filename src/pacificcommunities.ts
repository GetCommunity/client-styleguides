import plugin from "tailwindcss/plugin.js"

const fontFamily = {
  "pacificcommunities-primary": ["Roboto", "sans-serif"],
  "pacificcommunities-secondary": ['"IBM Plex Serif"', "serif"]
}

const colors = {
  "pacificcommunities-primary-blue-light": "#043E70",
  "pacificcommunities-primary-blue-dark": "#021E46",
  "pacificcommunities-primary-gray": "#54595F",
  "pacificcommunities-secondary-yellow": "#F7DF4B",
  "pacificcommunities-secondary-green": "#C1CD59",
  "pacificcommunities-secondary-magenta": "#A12543",
  "pacificcommunities-secondary-red": "#6E120B",
  "pacificcommunities-secondary-orange": "#FF9A32"
}

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
})
