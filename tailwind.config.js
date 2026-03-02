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
        brand: {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fbd5a8',
          300: '#f8b871',
          400: '#f49338',
          500: '#f28201',
          600: '#d97306',
          700: '#b45a09',
          800: '#92470e',
          900: '#783c0f',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)',
        'card-hover': '0 0 0 1px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.08)',
        'glow': '0 0 30px rgba(242, 130, 1, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
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
          clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
          marginLeft: '-35px',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
