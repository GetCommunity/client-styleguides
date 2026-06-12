import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "olsonhomes-primary": ['"Gotham"', "sans-serif"],
  "olsonhomes-secondary": ["PT Serif", "serif"]
}

const colors = {
  "olsonhomes-dark-blue": "#3d5a7c",
  "olsonhomes-teal": "#0093a5",
  "olsonhomes-dark-grey": "#58595b",
  "olsonhomes-light-grey": "#e1e1e1"
}

const pluginConfig: NonNullable<Config["plugins"]>[number] = plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
})

export default pluginConfig
