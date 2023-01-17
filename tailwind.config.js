/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'red-primary':'#FB6564',
        'purple-primary':'#A03CEA',
        'purple-light':'#AFA2C3',
        'purple-dark':'#3E334E',
        'brown-primary':'#3C2C20',
        'brown':{
          100:'#C1A28B',
          200:'#BA977D',
        },
      },

      screens:{
        'sm':'428px',
      },

      backgroundImage:{
        'banner-mobile':"url('../src/assets/bg-body.svg')",
      },

      fontFamily:{
        'inter':["'Inter', sans-serif"],
        'sora':["'Sora', sans-serif"]
      },
    },
  },
  plugins: [],
}