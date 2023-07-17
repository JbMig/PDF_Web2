module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    colors: {
      'yellow' : '#FFF37A',
      'text_yellow' : '#FFEB82',
      'border_yellow' : '#BDB242'
    },
    spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    fontWeight: {
      normal : '500',
      bold: '700',
    },
    fontSize: {
      'base': '1rem',
      'moyen': '1.25rem',
      'grand': '1.5rem',
      'titre': '3rem',
    }
  }
};
