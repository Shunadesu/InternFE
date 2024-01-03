/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"
, "./public/index.html"
],
  theme: {
    fontFamily:{
      main: ['Poppins', 'san-serif']
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      width:{
        main: '1220px'
      },
      backgroundColor: {
        main: '#ee3131'
      },
      colors:{
        main: '#ee3131'
      },
    },
  },
  plugins: [
    "@tailwindcss/line-clamp",
    "@tailwindcss/forms"
  ],
}