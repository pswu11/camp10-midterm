/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-black': '#1C1C27',
      'secondary-grey': '#363740',
      'white-standard': '#FFFFFF',
      'white-dimmed': '#FFFFFF66',
      'white-dimmed-heavy': '#FFFFFF33',
      'status-yellow': '#FFB43A',
      'status-red': '#EF4444',
      'status-green': '#22C55E',
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
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
      24: '24.rem',
      12: '12.rem',
      8: '8.rem',

    spacing: {
      4: '1.25rem',
      5: '1.5rem',
      6: '1.75rem',
      7: '2rem',
    },

    extend: {},
  },
  plugins: [],
};
