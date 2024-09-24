const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Add this part to ensure the container behaves as expected
      container: {
        center: true,
        padding: '1rem', // Optionally, add some padding for small screens
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "carDoctorTheme": {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811", 
          secondary: "teal", 
          "btn-primary": {
            "color": "#fff"
          }, 
          "btn-outline.btn-primary:hover": {
            "color": "#fff"
          },
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};

