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
      base : '80px',
      lg_profile:'96px',
      
      sidebar: "320px"
    },
    fontWeight: {
      normal : '500',
      bold: '700',
    },
    fontSize: {
			'base': '1rem',
			'medium': '1.25rem',
			'big': '40px',
			'title': '48px',
		},
    fontFamily: {
      'satoshi': ['Satoshi-Regular', 'Satoshi-Bold', 'Satoshi-Medium'],
      'sans' : ['sans-serif']
    },
    dropShadow: {
			lg: '0px 0px 32px 0px rgba(0, 0, 0, 0.25)',
		}
  }
};
