/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/tailwind.css"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "  2px 2px #888888, 4px 5px gray;",
      },
    },
  },
  plugins: [],
};
