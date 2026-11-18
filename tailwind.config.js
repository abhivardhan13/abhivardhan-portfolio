/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFA',
          100: '#F7F4EE', // Primary luxury warm ivory background
          200: '#EFECE2',
          300: '#E5E0D2',
          400: '#D9D2C0',
          500: '#C7BD9F'
        },
        charcoal: {
          900: '#181818',
          800: '#242424', // Primary typography
          700: '#33312E',
          600: '#4D4A46',
          500: '#67635E',
          400: '#8A8680',
          300: '#AAA59E',
          200: '#CBC6BF',
          100: '#EAE6E1'
        },
        champagne: {
          50: '#FAF8F4',
          100: '#F4EFE5',
          200: '#E7DCBE',
          300: '#D8C59C',
          400: '#C5AF7D',
          500: '#B49A68', // Primary accent
          600: '#9E8251',
          700: '#7F673E',
          800: '#5F4D2E',
          900: '#3D311D'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'loose-editorial': '0.15em',
        'wide-editorial': '0.08em',
      },
      lineHeight: {
        'relaxed-editorial': '1.8',
      }
    },
  },
  plugins: [],
}
