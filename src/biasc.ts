import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "biasc-primary": ['"Proxima Nova"', "sans-serif"],
  "biasc-secondary": ["Oswald", "serif"]
}

const colors = {
  "biasc-blue": "#07506E",
  "biasc-gray": "#7F7F7F",
  "biasc-gold": "#CC9933"
}

const biascPlugin = plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
}) as unknown as Config

export default biascPlugin
