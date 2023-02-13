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
        "grey-title": "#495057",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
