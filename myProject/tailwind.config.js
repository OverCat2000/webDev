/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "slate-gray": "#6D6D6D"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};






// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     fontSize: {
//       xs: ['12px', '16px'],
//       sm: ['14px', '20px'],
//       base: ['16px', '19.5px'],
//       lg: ['18px', '21.94px'],
//       xl: ['20px', '24.38px'],
//       '2xl': ['24px', '29.26px'],
//       '3xl': ['28px', '50px'],
//       '4xl': ['48px', '58px'],
//       '8xl': ['96px', '106px']
//     },
//     extend: {
//       fontFamily: {
//         palanquin: ['Palanquin', 'sans-serif'],
//         montserrat: ['Montserrat', 'sans-serif'],
//       },
//       colors: {
//         'primary': "#ECEEFF",
//         "coral-red": "#FF6452",
//         "slate-gray": "#6D6D6D",
//         "pale-blue": "#F5F6FF",
//         "white-400": "rgba(255, 255, 255, 0.80)"
//       },
//       boxShadow: {
//         '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
//       },
//       backgroundImage: {
//         'hero': "url('assets/images/collection-background.svg')",
//         'card': "url('assets/images/thumbnail-background.svg')",
//       },
//       screens: {
//         "wide": "1440px",
//         xs: "480px",
//         sm: "768px",
//         md: "1060px"
//       }
//     },
//   },
//   plugins: [],
// }
