import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundImage: {
        "editors-pick1": "url('/assets/BlogImage1.png')",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "grey-dark": "#495057",
        "grey-light": "#6c757d",
        sand: "#d4a373",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
