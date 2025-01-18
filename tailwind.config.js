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
        'prayer5' : "url('/src/assets/images/prayer/member.jpg')",
        'prayer6' : "url('/src/assets/images/prayer/prayer-request.jpg')",
        'prayer7' : "url('/src/assets/images/prayer/testimony.jpg')",
        'raa' : "url('/src/assets/images/sermons/RAA-4.png')",
        'lady' : "url('/src/assets/images/sermons/lady2.jpg')",
        'be' : "url('/src/assets/images/Believe/testiBg.png')",
        'mobile-bg' : "url('/src/assets/images/hero/welcomers.jpg')",
        'member-bg' : "url('/src/assets/images/membership/IMG-20240703-WA0018.jpg')",
        'about-bg' : "url('/src/assets/images/about/ADE_8239.jpg')",
        'about-bg2' : "url('/src/assets/images/about/ADE_8238.jpg')",
        'about-bg3' : "url('/src/assets/images/about/ADE_8171.jpg')",
        'about-man' : "url('/src/assets/images/about/mandate.jpg')",
        'pay-bg' : "url('/src/assets/images/pay/time-bg.png')",
      }
    },
  },
  plugins: [],
}