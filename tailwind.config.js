/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/hero/hero1.jpg')",
        'prayer1' : "url('/src/assets/images/prayer/prayer1.jpg')",
        'prayer2' : "url('/src/assets/images/prayer/prayer2.jpg')",
        'prayer3' : "url('/src/assets/images/prayer/prayer3.jpg')",
        'prayer4' : "url('/src/assets/images/prayer/prayer4.jpg')",
        'raa' : "url('/src/assets/images/sermons/RAA-4.png')",
        'lady' : "url('/src/assets/images/sermons/lady2.jpg')",
        'be' : "url('/src/assets/images/Believe/testiBg.png')",
        // 'mobile-bg' : "url('/src/assets/images/vol-mobile-bg.avif')",
        // 'bg2' : "url('/src/assets/images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}