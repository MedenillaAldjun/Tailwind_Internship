/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Raleway'],
        custom2: ['Geologica'],
      },
      colors: {
        mycolor: '#1B424C',    
      },
    },
  },
  plugins: [],
}

