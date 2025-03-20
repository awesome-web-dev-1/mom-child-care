/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      screens:{
        xs:"575px",
        sm:"768px",
        md:"992px",
        lg:"1200px",
        xl:"1400px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "serif"],
      },
      colors:{
        primary:'#00715d',
        primary2:'#005b4b',
        
      }
    },
  },
  plugins: [],
}