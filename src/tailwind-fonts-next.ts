import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  theme: {
    fontFamily: {
      serif: ["var(--font-lora)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
    },
  },
};
