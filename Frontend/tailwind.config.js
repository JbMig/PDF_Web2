module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      main_yellow: "#FFEB82",
      border_yellow: "#BDB242",
      white: "#FFFFFF",
      black: "#000000",
      background: "#242529",
      gray: "#78767A",
      gray_border: "#34363C",
    },
    spacing: {
      none: "0px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      btn: "48px",
      sm_profile: "56px",
      base: "80px",
      lg_profile: "96px",
      header_height: "120px",

      sidebar: "320px",
      room_card: "500px",
      full: "100%",
    },
    // text
    fontSize: {
      base: "1rem",
      medium: "1.25rem",
      big: "40px",
      title: "48px",
    },
    // font
    fontFamily: {
      satoshi: ["satoshi"],
    },
    // dropShadow: {
    //   lg: "0px 0px 32px 0px rgba(0, 0, 0, 0.25)",
    // },
    boxShadow: {
      header: "0px 8px 32px 0px rgba(0 0 0 / 0.5)",
    },
    extend: {
      zIndex: {
        1: "10",
        2: "20",
        3: "30",
        4: "40",
        5: "50",
      },
    },
  },
};
