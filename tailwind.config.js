/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")]
}
