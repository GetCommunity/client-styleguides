import plugin from "tailwindcss/plugin"
import type { Config } from "tailwindcss"

const fontFamily = {
  "biasc-primary": ['"Proxima Nova"', "sans-serif"],
  "biasc-secondary": ["Oswald", "serif"]
}

const colors = {
  "biasc-blue": "#07506E",
  "biasc-gray": "#7F7F7F",
  "biasc-gold": "#CC9933"
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
