/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
			Montserrat: ['"Montserrat"', "sans-serif"],
		},
		colors: {
			primary: "#CC2D4A",
			secondary: "#8FA206",
			tertiary: "#61AEC9",
		},
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('/src/assets/images/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('/src/assets/images/sanFranciscoDesktop.jpg')",
        'yosemite': "url('/src/assets/images/yosemite.jpg')",
        'LA': "url('/src/assets/images/LA.jpg')",
        'seattle': "url('/src/assets/images/seattle.jpg')",
        'new_york': "url('/src/assets/images/new_york.jpg')",
        'norway': "url('/src/assets/images/norway.jpg')",
        'sydney': "url('/src/assets/images/sydney.jpg')",
        'miami': "url('/src/assets/images/miami.jpg')",
        'switzerland': "url('/src/assets/images/switzerland.jpg')",
        'bali': "url('/src/assets/images/bali.jpg')",
        'norway': "url('/src/assets/images/norway.jpg')",
        'chicago': "url('/src/assets/images/chicago.jpg')",
        'europe': "url('/src/assets/images/europe.jpg')",
        'iceland': "url('/src/assets/images/iceland.jpg')"
      }
    },
  },
  plugins: [],
}

