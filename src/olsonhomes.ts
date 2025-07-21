import plugin from "tailwindcss/plugin.js"

const fontFamily = {
  "olsonhomes-primary": ['"Gotham"', "sans-serif"],
  "olsonhomes-secondary": ["Gladiola", "serif"]
}

const colors = {
  "olsonhomes-primary-blue": "#00558F",
  "olsonhomes-primary-gray": "#424243",
  "olsonhomes-secondary-orange": "#F8961F",
  "olsonhomes-secondary-blue-sky": "#60CCE5",
  "olsonhomes-secondary-blue-dark": "#05314A",
  "olsonhomes-secondary-teal": "#31B991"
}

export default plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
})
