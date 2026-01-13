import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "wpg-primary": ["Helvetica", "sans-serif"],
  "wpg-secondary": ["Optima", "sans-serif"]
}

const colors = {
  "wpg-gray": "#7B7778",
  "wpg-teal": "#6FA5A8",
  "wpg-orange": "#CC612B",
  "wpg-tan-dark": "#A39383",
  "wpg-tan-light": "#D4CCC5"
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
