module.exports = {
  purge: {
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      whitelist: ["p", "ul", "li"],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      "sans-alt": ["Poppins", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      blue: {
        "500": "#1E86FF",
      },
      indigo: {
        "700": "#334680",
        "800": "#282538",
      },
      gray: {
        "100": "#F6F7FB",
        "200": "#B7BCCE",
        "500": "#B9BDCF",
      },
      yellow: {
        "500": "#FFEC65",
      },
    },
    extend: {
      spacing: {
        "96": "24rem",
      },
      screens: {
        xxl: "1400px",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
