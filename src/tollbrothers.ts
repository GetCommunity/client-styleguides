import plugin from "tailwindcss/plugin"
import type { Config } from "tailwindcss"

const fontFamily = {
  "tollbrothers-primary": ['"DM Serif Display"', "serif"],
  "tollbrothers-secondary": ["Gotham", "sans-serif"]
}

const colors = {
  "tollbrothers-primary-blue-dark": "#0C2240",
  "tollbrothers-primary-white": "#FFFFFF",
  "tollbrothers-primary-tan": "#E5E1DB",
  "tollbrothers-primary-blue-light": "#004876",
  "tollbrothers-accent-blue": "#0070CC",
  "tollbrothers-accent-tan": "#696056",
  "tollbrothers-accent-magenta": "#A31F34"
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
