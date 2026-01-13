import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "vandaele-primary": ["Gotham", "sans-serif"]
}

const colors = {
  "vandaele-primary-green": "#91A01D",
  "vandaele-primary-gray": "#455565",
  "vandaele-accent-green-dark": "#ADB857",
  "vandaele-accent-green-mid": "#C7CF8F",
  "vandaele-accent-green-light": "#E3E8C7",
  "vandaele-accent-gray-dark": "#6B737D",
  "vandaele-accent-gray-mid": "#9EA3A6",
  "vandaele-accent-gray-light": "#D1D1D4"
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
