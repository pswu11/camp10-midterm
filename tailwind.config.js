/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: {
        default: '#1C1C27',
        light: '#363740',
      },
      white: {
        default: '#FFFFFF',
        dimmed: {
          default: '#FFFFFF66',
          heavy: '#FFFFFF33',
        },
      },
      red: {
        default: '#EF4444',
      },
      yellow: {
        default: '#FFB43A',
      },
      green: {
        default: '#22C55E',
      },
    },
    fontFamily: {
      default: ['"Inter"', 'sans-serif'],
    },
    fontSize: {
      l: '1rem',
      m: '0.875rem',
      s: '0.750rem',
    },
    fontWeight: {
      700: '700',
      500: '500',
    },
    borderRadius: {
      default: '8px',
      12: '12px',
      rounded: '50%',
    },
    spacing: {
      1: '0.5rem',
      4: '1.25rem',
      5: '1.5rem',
      6: '1.75rem',
      7: '2rem',
    },

    extend: {},
  },
  plugins: [],
};
