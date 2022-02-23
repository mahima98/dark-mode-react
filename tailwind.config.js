const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".card": {
          backgroundColor: theme("colors.black"),
          margin: theme("spacing.6"),
          padding: theme("spacing.3"),
          borderRadius: theme("borderRadius.lg"),
        },
      });
    }),
  ],
  prefix: "",
  important: true,
  corePlugins: {
    margin: false,
  },
  darkMode: "class",
};
