import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const fontFamily = {
  "brandywine-primary": ['"Proxima Nova"', "san-serif"],
  "brandywine-secondary": ["Oswald", "serif"]
}

const colors = {
  "brandywine-primary-blue": "#003C7C",
  "brandywine-primary-green": "#BAD40F",
  "brandywine-primary-orange": "#F6A81C",
  "brandywine-primary-skyblue": "#2CB0C8",
  "brandywine-primary-purple": "#571670"
}

const brandywinePlugin = plugin(function () {}, {
  theme: {
    extend: {
      colors,
      fontFamily
    }
  }
}) as unknown as Config

export default brandywinePlugin
