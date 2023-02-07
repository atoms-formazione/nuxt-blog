import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    colors: {
      "title-gray": "#495057",
      "footer-black": "#212529",
      "bg-gray": "#343A40",
      "text-light-gray": "#6C757D",
      "text-white": "#E5E5E5",
      "active-gold": "#D4A373",
      "tag-bg-gray": "rgba(255, 255, 255, 0.15)",
      "logo-white": "#F8F9FA",
    },
    fontFamily: {
      logo: ["League Spartan", "sans-serif"],
      serif: ["Lora", "serif"],
      tag: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
