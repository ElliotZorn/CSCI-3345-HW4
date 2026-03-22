/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        tasktype: "#D67447",
        taskbackground: "#EFEFEF",
        buttonbackground: "#464545",
      },

    },
  },
  plugins: [],
};
