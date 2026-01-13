import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "gc-primary": ['"Noto Sans"', "Helvetica", "Verdana", "sans-serif"]
}

const colors = {
  "getcommunity-red": "#E16740",
  "getcommunity-pink": "#D9546F",
  "getcommunity-orange": "#EF9E27",
  "getcommunity-yellow": "#FED041",
  "getcommunity-green": "#8E9A39",
  "getcommunity-blue-light": "#ABDBD8",
  "getcommunity-blue-dark": "#28829E",
  "getcommunity-brown-light": "#C7B088",
  "getcommunity-brown-dark": "#725846"
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
