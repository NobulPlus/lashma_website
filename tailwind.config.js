// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#f28201',
      },
      clipPath: {
        custom: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-left': {
          clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
        },
        '.clip-custom-right': {
          clipPath: 'polygon(25% 0, 100% 0,  100% 100%, 0 100%)',
          marginLeft: '-35px', /* Adjust as needed to remove the gap */
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
