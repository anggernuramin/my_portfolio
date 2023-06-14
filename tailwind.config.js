/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    // merubah style container,g secara default berada dikirimenjadi center
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#FF0066",
        secondary: "#0f172a",
        dark: "#0f172a",
      },
      screens: {
        // merubah style jika berada diukuran dekstop,maka lebar kita menjadi
        // artinya saat kita berada didekstop (laptop) maka kita mengubah preakpoints di tailwind yang seharusnya lebar(1536px) diubah menjadi (1320px)
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
