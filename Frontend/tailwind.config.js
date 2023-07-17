module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      yellow: "#FFF37A",
      text_yellow: "#FFEB82",
      border_yellow: "#BDB242",
      background_grey: "#242529",
    },
    spacing: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      xxxl: "80px",
    },
    fontSize: {
      base: "1rem",
      medium: "1.25rem",
      big: "40px",
      title: "48px",
    },
    fontFamily: {
      satoshi: ["satoshi"],
    },
    dropShadow: {
      lg: "0px 0px 32px 0px rgba(0, 0, 0, 0.25)",
    },
  },
};
