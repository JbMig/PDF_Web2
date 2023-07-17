module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      'yellow' : '#FFF37A',
      'text_yellow' : '#FFEB82',
      'border_yellow' : '#BDB242',

      'background' :"#242529",
      'black' : "#000000",
      'white' : "#FFFFFF",
      'gray' : "#78767A",
      'gray_border' : "#34363C"
    },
    spacing: {
      none: "0px",
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '40px',
      sm_profile : "56px",
      lg_profile:'96px',
      
      sidebar: "320px"
    },
    // font
    fontWeight: {
      normal : '500',
      bold: '700',
    },
    // text
    fontSize: {
      base: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      title: '3rem',
    },
    fontFamily: {
      'satoshi': ['Satoshi-Regular', 'Satoshi-Bold', 'Satoshi-Medium'],
      'sans' : ['sans-serif']
    }
  }
};
