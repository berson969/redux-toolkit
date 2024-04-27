/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./src/**/components/**/*.{js,jsx,tsx}",
    "./src/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'rubik':['Rubik', 'serif'],
        'yeseva':["Yeseva-one", 'serif'],
        'cuprum':["Cuprum", 'san-serif'],
        'dejavu': ['DejaVu Sans', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
      },
      lineHeight: {
        '12px': '12px',
      },
    },
  },
  plugins: [],
}

