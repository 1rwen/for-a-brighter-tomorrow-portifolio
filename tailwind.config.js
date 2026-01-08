/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',   // 1080p+
        '4xl': '2560px',   // 1440p+
        '5xl': '3840px',   // true 4K
      },
    },
  },
  plugins: [],
};
