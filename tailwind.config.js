/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      clipPath: {
        custom: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities })
    {
      const newUtilities = {
        '.clip-custom': {
          clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

