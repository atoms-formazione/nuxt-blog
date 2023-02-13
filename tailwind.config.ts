import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      backgroundImage: {
        "editors-pick1": "url('/assets/BlogImage1.png')",
      },
      fontFamily: {
        Lora: ["Lora", "serif"],
      },
      colors: {
        "grey-title": "#495057",
      },
    },
  },
  plugins: [],
};
