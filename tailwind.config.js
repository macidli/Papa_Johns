/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {},
    screens: {
      xsm: '480px',
      kecid1:'550px',
      sm: '640px',
      md: '768px',
      lg: '1024px', 
      xl: '1280px', 
      '2xl': '1536px',
      'max-sm': { max: '639px' }, 
    },
  },
  plugins: [],
};

