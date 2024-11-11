/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "#282828",
        "body-custom": "#121212",
        "divider-custom": "#7a7a7a",
        "icon-custom": "#1f1f1f",
      },
    },
  },
  plugins: [],
};
