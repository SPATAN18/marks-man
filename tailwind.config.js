/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              marginTop: "0",
              marginBottom: "0",
            },
            h1: {
              marginTop: "0",
              marginBottom: "0",
            },
            h2: {
              marginTop: "0",
              marginBottom: "0",
            },
            h3: {
              marginTop: "0",
              marginBottom: "0",
            },
            // Add other elements as needed
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
