/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "inset 0 0 7px 1px rgba(0, 0, 0, 0.2)",
      },
      dropShadow: {
        "3xl": "0 1px 3px rgba(0, 0, 0, 0.25)",
        "4xl": "1px 0 2px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
