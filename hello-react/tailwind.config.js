/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
    "./src/**/*.js",
    "./public/index.html",
    "./node_modules/@my-company/tailwind-components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
