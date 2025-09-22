module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")], // ✅ added daisyUI
  daisyui: {
    themes: ["light", "dark", "cupcake"], // optional: choose themes you like
  },
};

